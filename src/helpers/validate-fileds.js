function isString(value) {
	return typeof value === 'string'
}

function isValidEmail(email) {
	// Non-whitespace and non-sign character
	// 1+ times
	// @
	// Non-whitespace and non-sign character
	// 1+ times
	// .
	// Non-whitespace and non-sign character
	// 1+ times
	const validator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	const validValue = isString(email) && validator.test(email)
	return validValue
}

function isValidPassword(password) {
	const validValue = password?.length >= 5
	return validValue
}

function validateFields(fieldsData) {
	for (const fieldData of fieldsData) {
		const result = fieldData.validator(fieldData.value)
		const error = result ? null : fieldData.errorMessage
		if (error) {
			return error
		}
	}
	return null
}

export { validateFields, isValidEmail, isValidPassword }
