import { validateUserData } from '../middlewares/index.js'
import { respond, registerUser } from '../services/index.js'

async function handler(req, res, next) {
	const { User } = res.locals.database
	const { email, password } = req.body
	try {
		const { error, data } = await registerUser(
			User,
			email?.toLowerCase(),
			password
		)
		if (error) {
			respond(res, 'error', data.errorMessage)
			return
		}
		respond(res, 'success', 'signedUp', data)
	} catch (error) {
		console.trace(error)
		respond(res, 'error', 'unknown')
		return
	}
}

const data = {
	method: 'post',
	path: '/api/users/register',
	validations: [validateUserData],
	handler
}

export { data }
