import {
	validateFields,
	isValidEmail,
	isValidPassword
} from '../helpers/index.js'
import { respond } from '../services/index.js'

function validateUserData(req, res, next) {
	const fieldsData = [
		{
			value: req.body.email,
			validator: isValidEmail,
			errorMessage: 'invalidEmail'
		},
		{
			value: req.body.password,
			validator: isValidPassword,
			errorMessage: 'invalidPassword'
		}
	]
	const errorMessage = validateFields(fieldsData)
	if (errorMessage) {
		respond(res, 'error', errorMessage)
	} else {
		next()
	}
}

export { validateUserData }
