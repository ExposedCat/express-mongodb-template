import { encrypt } from '../helpers/index.js'

async function createUser(email, password) {
	const encryptedPassword = await encrypt(password)
	return this.create({
		email,
		password: encryptedPassword
	})
}

export { createUser }
