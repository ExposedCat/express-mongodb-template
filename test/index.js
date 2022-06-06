import chai from 'chai'
import chaiHttp from 'chai-http'

import { initApp } from '../src/config/app.js'
import { initFakeDataFactory } from './utils/data.js'

import {
	testRootEndpoint,
	testRegisterEndpoints,
	testLoginEndpoints,
} from './api/index.js'

process.env.NODE_ENV = 'test'
chai.use(chaiHttp)

const { server, database } = await initApp()
const FakeDataFactory = initFakeDataFactory()

testRootEndpoint(server, chai)
testRegisterEndpoints(server, database, chai, FakeDataFactory)
testLoginEndpoints(server, database, chai, FakeDataFactory)
