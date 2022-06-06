import { sign } from 'async-jsonwebtoken'

async function generateJWT(data, expiresIn = '15m') {
	const options = { expiresIn }
	const [token, error] = await sign(data, process.env.JWT_SECRET, options)
	return { token, error }
}

export { generateJWT }
