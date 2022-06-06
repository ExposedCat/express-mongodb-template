import bcrypt from 'bcrypt'

async function encrypt(data) {
	const salt = await bcrypt.genSalt(10)
	const encrypted = await bcrypt.hash(data, salt)
	return encrypted
}

async function compare(data, encrypeted) {
	return await bcrypt.compare(data, encrypeted)
}

export { encrypt, compare }
