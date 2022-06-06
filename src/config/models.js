import { userClass, userSchema } from '../models/user.js'

import mongoose from 'mongoose'

function initModel(name, entitySchema, entityClass) {
	entitySchema.loadClass(entityClass)
	const Model = new mongoose.model(name, entitySchema)
	return Model
}

function initModels() {
	return {
		User: initModel('User', userSchema, userClass)
	}
}

export { initModels }
