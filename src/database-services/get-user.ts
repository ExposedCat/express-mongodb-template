import { ObjectId } from 'mongoose'
import { User, UserModel } from '../types/index.js'

async function getUser(this: UserModel, query: object) {
	const user = await this.findOne(query)
	return user as User
}

async function getUserById(this: UserModel, userId: ObjectId) {
	return getUser.bind(this)({ userId })
}

async function getUserByEmail(this: UserModel, email: string) {
	return getUser.bind(this)({ email })
}

export { getUserById, getUserByEmail }
