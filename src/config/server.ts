import express, { Express } from 'express'
import session from 'express-session'
import helmet, { HelmetOptions } from 'helmet'
import * as controllers from '../controllers/index.js'
import { setHandler } from '../services/index.js'

function runServer(server: Express, port: number): Promise<void> {
	// Promisify listener
	return new Promise(resolve => server.listen(port, () => resolve()))
}

function setMiddlewares(app: Express) {
	// Security headers
	const helmetOptions = {
		referrerPolicy: 'strict-origin-when-cross-origin'
	} as HelmetOptions
	app.use(helmet(helmetOptions))

	app.use(
		session({
			secret: process.env.SESSION_SECRET,
			resave: true,
			saveUninitialized: true
		})
	)
	app.use(express.json())
	app.use(express.urlencoded({ extended: true }))
}

function initServer() {
	const server = express()

	setMiddlewares(server)
	setHandler(server, controllers.root)
	setHandler(server, controllers.private)
	setHandler(server, controllers.login)
	setHandler(server, controllers.register)
	setHandler(server, controllers.pageNotFound)
	setHandler(server, controllers.unknownError)

	return {
		server,
		runServer: (port: number) => runServer(server, port)
	}
}

export { initServer }
