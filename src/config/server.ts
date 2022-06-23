import express, { Express } from 'express'

import { setMiddlewares } from '../middlewares/set.js'
import { setHandlers } from '../controllers/set.js'

function runServer(server: Express, port: number): Promise<void> {
	// Promisify listener
	return new Promise(resolve => server.listen(port, () => resolve()))
}

function initServer(sessionSecret: string) {
	const server = express()

	setMiddlewares(server, sessionSecret)
	setHandlers(server)

	return {
		server,
		runServer: (port: number) => runServer(server, port)
	}
}

export { initServer }
