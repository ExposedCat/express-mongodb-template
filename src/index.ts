import { initApp } from './config/index.js'

const { connectToDatabase, runServer } = await initApp()

// Start entities
await connectToDatabase()
await runServer(Number(process.env.PORT))
console.info(`App started`)
