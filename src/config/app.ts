import { initServer, initDatabase, prepareEnvironment } from './index.js'

async function initApp() {
	// Load and validate environment variables
	prepareEnvironment()

	let connectToDatabase = initDatabase()
	const { server, runServer } = initServer()

	return { server, connectToDatabase, runServer }
}

export { initApp }
