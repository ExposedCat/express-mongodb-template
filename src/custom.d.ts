import { JwtUserData } from './types/index.js'

declare module 'express' {
	export interface Request {
		authorization: JwtUserData
	}
}
