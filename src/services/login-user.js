import { generateJWT } from '../helpers/index.js'

async function loginUser(User, email, password) {
	const { correct, userId } = await User.correctCredentials(email, password)
	if (!correct) {
		return {
			error: true,
			data: {
				errorMessage: 'invalidCredentials'
			}
		}
	}
	const userData = { data: { userId } }
	const { token, error } = await generateJWT(userData)
	if (error) {
		return {
			error: true,
			data: {
				errorMessage: 'unknown'
			}
		}
	}
	return {
		error: false,
		data: {
			loginToken: token
		}
	}
}

export { loginUser }
