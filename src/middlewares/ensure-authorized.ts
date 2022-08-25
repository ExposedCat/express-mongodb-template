import { ResponseName, ResultType } from '../types/index.js'
import { Request, Response, NextFunction } from 'express'
import { respond, extractJwtData } from '../services/index.js'

async function ensureAuthorized(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const data = await extractJwtData(req.headers.authorization as string)
	if (data) {
		req.authorization = data
		next()
	} else {
		respond(res, ResultType.Error, ResponseName.Unauthorized)
	}
}

export { ensureAuthorized }
