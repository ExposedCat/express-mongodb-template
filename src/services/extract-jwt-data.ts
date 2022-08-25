import { JwtUserData } from '../types/index.js'
import { verify } from 'async-jsonwebtoken'

async function extractJwtData(jwt: string) {
	const [data, error] = await verify(jwt, process.env.JWT_SECRET as string)
	if (error) {
		return null
	} else {
		return data as JwtUserData
	}
}

export { extractJwtData }
