import { initApp } from './config/index.js'

let connectToDatabase
let runServer
try {
	const app = await initApp()
	connectToDatabase = app.connectToDatabase
	runServer = app.runServer
} catch (error) {
	console.error(`[App init]`, error)
	process.exit(1)
}

try {
	await connectToDatabase()
} catch (error) {
	console.error(`[Database]`, error)
	process.exit(2)
}

try {
	await runServer(Number(process.env.PORT))
} catch (error) {
	console.error(`[Server]`, error)
	process.exit(3)
}

console.info(`App started`)
