import { compare } from '../helpers/index.js'

async function correctCredentials(email, password) {
	const user = await this.findOne({ email })
	if (!user) {
		return { correct: false, userId: null }
	}
	const correct = await compare(password, user.password)
	return { correct, userId: user._id }
}

export { correctCredentials }
