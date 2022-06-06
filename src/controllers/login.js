import { validateUserData } from '../middlewares/index.js'
import { respond, loginUser } from '../services/index.js'

async function handler(req, res, next) {
	const { User } = res.locals.database
	const { email, password } = req.body
	try {
		const { error, data } = await loginUser(
			User,
			email?.toLowerCase(),
			password
		)
		if (error) {
			respond(res, 'error', data.errorMessage)
			return
		}
		respond(res, 'success', 'signedIn', data)
	} catch (error) {
		console.trace(error)
		respond(res, 'error', 'unknown')
		return
	}
}

const data = {
	method: 'post',
	path: '/api/users/login',
	validations: [validateUserData],
	handler
}

export { data }
