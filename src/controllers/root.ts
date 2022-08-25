import {
	BasicHandler,
	HandlerData,
	HandlerType,
	ResponseName,
	ResultType
} from '../types/index.js'
import { respond } from '../services/index.js'
import { ensureAuthorized } from '../middlewares/index.js'

const handler: BasicHandler = async (req, res, next) => {
	respond(res, ResultType.Success, ResponseName.Root)
}

const data: HandlerData = {
	method: HandlerType.Get,
	path: '/api',
	handler,
	validations: [ensureAuthorized]
}

export { data }
