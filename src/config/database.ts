import mongoose, { ConnectOptions } from 'mongoose'

async function connectToDatabase() {
	const connectionOptions = {
		useNewUrlParser: true,
		useUnifiedTopology: true
	}
	const db = await mongoose.connect(
		process.env.DB_CONNECTION_STRING,
		connectionOptions as ConnectOptions
	)
	return db
}

function initDatabase() {
	mongoose.Promise = global.Promise
	return connectToDatabase
}

export { initDatabase }
