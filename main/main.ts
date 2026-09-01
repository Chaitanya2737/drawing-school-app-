import path from 'path'
import { app, ipcMain, powerSaveBlocker, net, dialog, Notification } from 'electron'
import serve from 'electron-serve'
import { createWindow } from './helpers/create-window'

const isProd = process.env.NODE_ENV === 'production'

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
      }, 2000) // Checks every 2 seconds
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

app.on('window-all-closed', () => {
  app.quit()
})

ipcMain.on('message', async (event, arg) => {
  event.reply('message', `${arg} World!`)
})
