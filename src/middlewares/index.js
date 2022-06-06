import express from 'express'
import helmet from 'helmet'
import session from 'express-session'

import { attachDatabase } from './database.js'

function setMiddlewares(app, database, sessionSecret) {
	app.use(
		helmet({
			referrerPolicy: 'strict-origin-when-cross-origin'
		})
	)
	app.use(
		session({
			secret: sessionSecret,
			resave: true,
			saveUninitialized: true
		})
	)
	app.use(express.json())
	app.use(
		express.urlencoded({
			extended: true
		})
	)
	app.use(
		attachDatabase({
			database
		})
	)
}

export { validateJWT } from './decode-jwt.js'
export { validateUserData } from './validate-user-data.js'
export { setMiddlewares }
