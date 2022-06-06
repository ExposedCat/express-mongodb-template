import { initModels } from './index.js'

import mongoose from 'mongoose'

async function connect(database, connectionString) {
	const connectionOptions = {
		useNewUrlParser: true,
		useUnifiedTopology: true
	}
	database.connection = await mongoose.connect(
		connectionString,
		connectionOptions
	)
}

function initDatabase(connectionString) {
	try {
		mongoose.Promise = global.Promise

		let database = initModels()
		const connector = connect.bind(null, database, connectionString)

		return { database, connectToDatabase: connector }
	} catch (error) {
		console.error('CRITICAL: Cannot connect to database:')
		console.trace(error)
		process.exit()
	}
}

export { initDatabase }
