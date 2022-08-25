import { testUnauthorized, testData } from '../utils/index.js'

function testPrivateEndpoint(server, database, chai, Faker) {
	describe('GET /api/private', () => {
		testUnauthorized(chai, server, {
			title: 'Should respond with error if user is not authorized',
			method: 'private',
			requestMethod: 'get'
		})
	})
	describe('GET /api/private', () => {
		it('Should respond with success if user is authorized', async () => {
			const userData = Faker.user()
			await database.User.createNew(userData.email, userData.password)
			const auth = await chai
				.request(server)
				.post(`/api/users/login`)
				.send(userData)
			const res = await chai
				.request(server)
				.get(`/api/private`)
				.set('Authorization', auth.body?.data?.loginToken)
				
			return await chai.expect(res.status).to.equal(200)
		})
	})
}

export { testPrivateEndpoint }
