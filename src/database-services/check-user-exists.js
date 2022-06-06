function userExists(email, password) {
	let searchQuery = { email }
	if (password !== undefined) {
		searchQuery.password = password
	}
	return this.exists(searchQuery)
}

export { userExists }
