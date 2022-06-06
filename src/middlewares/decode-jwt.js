import { verify } from 'async-jsonwebtoken'
import { respond } from '../services/index.js'

async function validateJWT(req, res, next) {
	const [data, error] = await verify(
		req.headers.authorization,
		process.env.JWT_SECRET
	)
	if (error) {
		respond(res, 'error', 'unauthorized')
		return
	} else {
		req.authorization = data
		return next()
	}
}

export { validateJWT }
