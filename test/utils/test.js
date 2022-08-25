function test(
	chai,
	server,
	{
		title,
		method,
		requestMethod = 'post',
		beforeTest = async () => ({}),
		data = null
	},
	testFunction
) {
	it(title, async () => {
		let auth = ''
		let pass = {}
		if (beforeTest) {
			const {
				data: evaluatedData,
				auth: evaluatedAuth,
				pass: evaluatedPass
			} = await beforeTest(data)
			auth = evaluatedAuth || auth
			pass = evaluatedPass || pass
			if (data === null) {
				data = evaluatedData
			}
		}
		const res = await chai
			.request(server)
			[requestMethod](`/api/${method}`)
			.set('Authorization', auth)
			.send(data)

		return await testFunction(res, data, pass)
	})
}

function testInvalidData(chai, server, testData) {
	test(chai, server, testData, res => {
		chai.expect(res.status).to.equal(400)
		chai.expect(res.body?.type).to.equal('invalidInput')
	})
}

function testUnauthorized(chai, server, testData) {
	test(chai, server, testData, res => {
		chai.expect(res.status).to.equal(401)
		chai.expect(res.body?.type).to.equal('unauthorized')
	})
}

function testAnyData(chai, server, testData) {
	test(chai, server, testData, testData.test)
}

export { testInvalidData, testAnyData as testData, testUnauthorized, test }
