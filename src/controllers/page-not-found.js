import { respond } from '../services/index.js'

function handler(req, res, next) {
	respond(res, 'error', 'pageNotFound')
}

const data = {
	method: 'middleware',
	handler
}

export { data }
