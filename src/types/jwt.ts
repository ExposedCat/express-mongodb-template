interface ValidJWT {
	error: false
	token: string
}

interface InvalidJWT {
	error: true
	token: null
}

type JWT = ValidJWT | InvalidJWT

export { JWT }
