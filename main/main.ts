import path from 'path'
import { app, ipcMain, powerSaveBlocker, net, dialog, Notification, shell } from 'electron'
import serve from 'electron-serve'
import { createWindow } from './helpers/create-window'
import fs from 'fs'
import os from 'os'
import express from 'express'
import cors from 'cors'
import { execSync } from 'child_process' // <-- Added for database sync

const isProd = process.env.NODE_ENV === 'production'

// --- Express API Server ---
import { startExpressServer } from './server/server.js'
// --------------------------

// --- Database Initialization ---
function initializeDatabase() {
  try {
    console.log("Checking and syncing database tables...");
    // Safely pushes the Prisma schema to the SQLite DB, creating missing tables
    execSync('npx prisma db push --accept-data-loss', { stdio: 'inherit' });
    console.log("Database tables are ready to go!");
  } catch (error) {
    console.error("Failed to initialize database tables:", error);
    new Notification({
      title: 'Database Error',
      body: 'Failed to initialize the database tables on startup.'
    }).show();
  }
}
// -------------------------------

// --- Storage Limit Checker ---
let hasWarnedDiskSpace = false;
function startDiskSpaceMonitor() {
  const checkSpace = () => {
    fs.statfs(app.getPath('userData'), (err, stats) => {
      if (err) return;
      const availableBytes = stats.bavail * stats.bsize;
      const availableMB = availableBytes / (1024 * 1024);

      if (availableMB < 500) {
        if (!hasWarnedDiskSpace) {
          hasWarnedDiskSpace = true;
          new Notification({
            title: '⚠️ Storage Almost Full',
            body: `Only ${Math.round(availableMB)}MB remaining. Please free up space to ensure data is saved safely.`
          }).show();
        }
      } else {
        hasWarnedDiskSpace = false;
      }
    });
  };

  checkSpace();
  setInterval(checkSpace, 300 * 1000);
}
// ------------------------------

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

  // 1. Sync the Database First!
  initializeDatabase()

  // 2. Start the background Express API Server
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
      }, 5000)
    })
  }

  const powerBlockerId = powerSaveBlocker.start('prevent-app-suspension')

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

ipcMain.on('request-server-status', (event) => {
  event.reply('server-Internat-status', {
    status: net.isOnline(),
  })
})

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

ipcMain.on('request-local-ip', (event) => {
  event.reply('server-local-ip', {
    ip: getLocalIpAddress(),
    port: 49215
  })
})

ipcMain.on('open-external-url', (event, url) => {
  if (url) {
    shell.openExternal(url)
  }
})

app.on('window-all-closed', () => {
  app.quit()
})

process.on('uncaughtException', (error) => {
  console.error('Fatal error in Main Process:', error)
  app.relaunch()
  app.quit()
})

app.on('render-process-gone', (event, webContents, details) => {
  if (details.reason === 'crashed' || details.reason === 'oom') {
    console.error('Renderer process crashed! Relaunching...')
    app.relaunch()
    app.quit()
  }
})