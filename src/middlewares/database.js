function attachDatabase({ database }) {
	return (req, res, next) => {
		res.locals.database = database
		next()
	}
}

export { attachDatabase }
