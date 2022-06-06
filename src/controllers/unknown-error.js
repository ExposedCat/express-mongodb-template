import { respond } from '../services/index.js'

function handler(error, req, res, next) {
	console.trace(error)
	respond(res, 'error', 'unknown')
}

const data = {
	method: 'middleware',
	handler
}

export { data }
