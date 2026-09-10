import express from 'express'
import cors from 'cors'
import setUpStatus from "../server/routes/setup.route/setup.js"

export function startExpressServer() {
  try {
    const expressApp = express()
    const port = 49215

    // Middleware
    expressApp.use(cors())
    expressApp.use(express.json())

    // Routes
    expressApp.get('/api', (req, res) => {
      res.json({ message: 'Express API working perfectly from Electron!' })
    })


    expressApp.use("/api" , setUpStatus)

    // Start Server with Error Handling
    const server = expressApp.listen(port, '0.0.0.0', () => {
      console.log(`✅ Background Express Server running on port ${port}`)
    })

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.error(`❌ Port ${port} is already in use!`)
      } else {
        console.error('❌ Express Server Error:', err)
      }
    })

  } catch (error) {
    console.error('❌ Fatal error while starting Express Server:', error)
  }
}