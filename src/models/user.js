import {
	getUser,
	createUser,
	userExists,
	correctCredentials
} from '../database-services/index.js'
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	}
})

class userClass {
	static createNew(email, password) {
		return createUser.bind(this)(email, password)
	}
	static checkExists(email, password) {
		return userExists.bind(this)(email, password)
	}
	static correctCredentials(email, password) {
		return correctCredentials.bind(this)(email, password)
	}
	static getById(id) {
		return getUser.bind(this)(id)
	}
}

export { userClass, userSchema }
