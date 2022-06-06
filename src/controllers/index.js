import { data as rootControllerData } from './root.js'
import { data as unknownErrorControllerData } from './unknown-error.js'
import { data as pageNotFoundControllerData } from './page-not-found.js'
import { data as registerControllerData } from './register.js'
import { data as loginControllerData } from './login.js'

function setHandler(app, handlerData) {
	if (handlerData.method === 'middleware') {
		app.use(handlerData.handler)
	} else {
		const apply = app[handlerData.method].bind(app)
		const validations = handlerData.validations || []
		apply(handlerData.path, ...validations, handlerData.handler)
	}
}

function setHandlers(app) {
	setHandler(app, rootControllerData)
	setHandler(app, loginControllerData)
	setHandler(app, registerControllerData)

	setHandler(app, pageNotFoundControllerData)
	setHandler(app, unknownErrorControllerData)
}

export { setHandlers }
