import path from 'path'
import { app, ipcMain, powerSaveBlocker, net, dialog, Notification } from 'electron'
import serve from 'electron-serve'
import { createWindow } from './helpers/create-window'
import fs from 'fs'
import os from 'os'
import express from 'express'
import cors from 'cors'

const isProd = process.env.NODE_ENV === 'production'

// --- Express API Server ---
// We moved the server code into its own file to keep main.ts clean!
import { startExpressServer } from './server/server.js'
// --------------------------

// --- Storage Limit Checker ---
// Checks the hard drive space and warns the user if it drops below 500MB.
let hasWarnedDiskSpace = false;
function startDiskSpaceMonitor() {
  const checkSpace = () => {
    // Get disk stats for the root directory (or the userData directory)
    fs.statfs(app.getPath('userData'), (err, stats) => {
      if (err) return;
      
      // Calculate available bytes (available blocks * block size)
      const availableBytes = stats.bavail * stats.bsize;
      const availableMB = availableBytes / (1024 * 1024);

      if (availableMB < 500) {
        // Only warn once until they free up space
        if (!hasWarnedDiskSpace) {
          hasWarnedDiskSpace = true;
          new Notification({
            title: '⚠️ Storage Almost Full',
            body: `Only ${Math.round(availableMB)}MB remaining. Please free up space to ensure data is saved safely.`
          }).show();
        }
      } else {
        // If they freed up space, reset the warning flag so we can warn them again in the future if needed
        hasWarnedDiskSpace = false;
      }
    });
  };

  // Check immediately, then check every 5 minutes (300,000 ms)
  checkSpace();
  setInterval(checkSpace, 300 * 1000);
}
// ------------------------------

// Required for Windows to ensure notifications show up correctly in the Action Center
if (process.platform === 'win32') {
  app.setAppUserModelId(isProd ? 'com.my-nextron-app' : 'process.execPath')
}

if (isProd) {
  serve({ directory: 'app' })
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`)
}

; (async () => {
  await app.whenReady()

  // Start the background Express API Server
  startExpressServer()

  // Start the background disk space monitor
  startDiskSpaceMonitor()

  // Wait for internet connection on startup
  if (!net.isOnline()) {
    console.log('No internet detected. Waiting for connection...')
    
    new Notification({
      title: 'App Waiting',
      body: 'Waiting for internet connection to start services...'
    }).show()

    await new Promise<void>((resolve) => {
      const interval = setInterval(() => {
        if (net.isOnline()) {
          clearInterval(interval)
          console.log('Internet connected!')
          
          new Notification({
            title: 'Internet Connected',
            body: 'Starting application services now!'
          }).show()
          
          resolve()
        }
      }, 5000) // Checks every 5 seconds to be more efficient
    })
  }

  // Prevent the system from going to sleep to keep the app's server running
  const powerBlockerId = powerSaveBlocker.start('prevent-app-suspension')

  // Run the app automatically when the computer starts/powers on
  app.setLoginItemSettings({
    openAtLogin: true,
  })

  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
    webPreferences: {
      preload: path.join(import.meta.dirname, 'preload.js'),
    },
  })

  if (isProd) {
    await mainWindow.loadURL('app://./')
  } else {
    const port = process.argv[2]
    await mainWindow.loadURL(`http://localhost:${port}/`)
    mainWindow.webContents.openDevTools()
  }
})()

// Listen for the frontend asking for the status (fixes timing issues)
ipcMain.on('request-server-status', (event) => {
  event.reply('server-Internat-status', {
    status: net.isOnline(),
  })
})

// Helper to get the local Wi-Fi/LAN IP Address
function getLocalIpAddress() {
  const interfaces = os.networkInterfaces()
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]!) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address
      }
    }
  }
  return '127.0.0.1'
}

// Listen for the frontend asking for the local IP
ipcMain.on('request-local-ip', (event) => {
  event.reply('server-local-ip', {
    ip: getLocalIpAddress(),
    port: 49215 // We will use a unique port!
  })
})

app.on('window-all-closed', () => {
  app.quit()
})

// --- Crash Recovery (Auto-Restart) ---
// 1. If the Main Process (Node.js server) throws a fatal error
process.on('uncaughtException', (error) => {
  console.error('Fatal error in Main Process:', error)
  // Relaunch the app automatically
  app.relaunch()
  app.quit()
})

// 2. If the Renderer Process (Next.js window) runs out of memory or crashes
app.on('render-process-gone', (event, webContents, details) => {
  if (details.reason === 'crashed' || details.reason === 'oom') {
    console.error('Renderer process crashed! Relaunching...')
    app.relaunch()
    app.quit()
  }
})