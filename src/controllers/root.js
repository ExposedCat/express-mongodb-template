import { respond } from '../services/index.js'

function handler(req, res, next) {
	respond(res, 'success', 'root')
}

const data = {
	method: 'get',
	path: '/api',
	handler
}

export { data }
