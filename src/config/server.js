import express from 'express'

import { setMiddlewares } from '../middlewares/index.js'
import { setHandlers } from '../controllers/index.js'

function initServer(database, sessionSecret) {
	const app = express()

	setMiddlewares(app, database, sessionSecret)
	setHandlers(app)

	return {
		server: app,
		runServer: port => app.listen(port)
	}
}

export { initServer }
