import { JWT, JwtUserData } from '../types/index.js'
import { sign } from 'async-jsonwebtoken'

async function generateJwt(
	data: JwtUserData,
	expiresIn = process.env.JWT_EXPIRATION
): Promise<JWT> {
	const options = { expiresIn }
	const [token, error] = await sign(
		data,
		process.env.JWT_SECRET as string,
		options
	)
	if (error || token == null) {
		// TODO: Use response generation function
		return {
			error: true,
			token: null
		}
	}
	return {
		error: false,
		token: token
	}
}

export { generateJwt }
