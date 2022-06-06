import { config as setEnvFile } from 'dotenv'

import { initServer, initDatabase } from './index.js'

import { validateEnv, path } from '../helpers/index.js'

async function initApp() {
	const testMode = process.env.NODE_ENV === 'test'

	// Load and validate environment variables
	const configName = `../../.env${testMode ? '-test' : ''}`
	setEnvFile({
		path: path(import.meta.url, configName)
	})
	validateEnv() // Will raise an error

	// Init entities
	const { database, connectToDatabase } = initDatabase(
		process.env.DB_CONNECTION_STRING
	)
	const { runServer, server } = initServer(
		database,
		process.env.SESSION_SECRET
	)

	// Start entities
	await connectToDatabase()
	runServer(process.env.PORT)

	return { server, database }
}

export { initApp }
