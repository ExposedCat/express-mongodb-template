function getUser(userId) {
	return this.findOne({ userId })
}

export { getUser }
