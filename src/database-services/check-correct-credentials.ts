import { UserModel, CredentialsValidaton } from '../types/index.js'
import { compare } from '../helpers/index.js'

async function correctCredentials(
	this: UserModel,
	email: string,
	password: string
): Promise<CredentialsValidaton> {
	const user = await this.getByEmail(email)
	// TODO: Use response generation function
	if (!user) {
		// TODO: Respond with error
		return { isCorrect: false, userId: null }
	}
	const isCorrect = await compare(password, user.password)
	return { isCorrect, userId: user._id }
}

export { correctCredentials }
