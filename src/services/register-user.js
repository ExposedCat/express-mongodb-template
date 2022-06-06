import { loginUser } from './index.js'

async function registerUser(User, email, password) {
	const userExists = await User.checkExists(email)
	if (userExists) {
		return {
			error: true,
			data: {
				errorMessage: 'emailInUse'
			}
		}
	}
	await User.createNew(email, password)
	const { error, data } = await loginUser(User, email, password)
	if (error) {
		return {
			error: true,
			data: {
				errorMessage: 'autoLoginError'
			}
		}
	}
	return {
		error: false,
		data
	}
}

export { registerUser }
