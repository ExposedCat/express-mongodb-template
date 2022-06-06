const error = (code, type, message) => ({
	code,
	response: {
		isError: true,
		type,
		message
	}
})

const success = message => ({
	code: 200,
	response: {
		isError: false,
		message
	}
})

function formResponse(type, name, data = {}) {
	const responses = {
		error: {
			userNotFound: error(401, 'unauthorized', 'User not found'),
			invalidCredentials: error(
				401,
				'unauthorized',
				'Invalid email or password'
			),
			autoLoginError: error(
				500,
				'internal',
				'User registered susccessfully, but internal error occurred while trying to auto-login. You should do it manually'
			),
			pageNotFound: error(404, 'invalidRoute', 'Page not found'),
			emailInUse: error(
				400,
				'invalidInput',
				'This email is already in use'
			),
			unknown: error(
				503,
				'internal',
				'Internal error occurred. Please try again later'
			),
			unauthorized: error(
				401,
				'unauthorized',
				'User is not authorized or authorization token is expired'
			),
			invalidEmail: error(400, 'invalidInput', 'Email is invalid'),
			invalidPassword: error(
				400,
				'invalidInput',
				'Password is invalid: should be at least 5 characters long'
			),
			invalidFirstName: error(
				400,
				'invalidInput',
				'First name is invalid: should be at least 2 characters long'
			),
			invalidLastName: error(
				400,
				'invalidInput',
				'Last name is invalid: should be at least 2 characters long'
			),
			invalidPhoneNumber: error(
				400,
				'invalidInput',
				'Phone number is invalid: should be at least 4 and not more than 15 digits long (except optional country code)'
			),
			invalidAddress: error(400, 'invalidInput', 'Address is invalid')
		},
		success: {
			signedIn: success('User successfully signed in'),
			signedUp: success('User successfully signed up'),
			root: success(
				'Welcome here. Check docs for instructions how to use this API. Use current URL as main API endpoint'
			),
			contactAdded: success('Contact successfully added')
		}
	}
	const isValidType = type === 'error' || type === 'success'
	const isUnknownResponse = responses[type][name] == undefined
	if (!isValidType || isUnknownResponse) {
		console.error(`Unknown "${type}" response "${name}"`)
		return responses.error.unknown
	}
	let responseObject = responses[type][name]
	responseObject.response.data = data
	return responseObject
}

function respond(res, type, name, data) {
	const { code, response } = formResponse(type, name, data)
	return res.status(code).json(response)
}

export { respond }
