import { config as setEnvFile } from 'dotenv'
import { validateEnv, resolvePath } from '../helpers/index.js'

function prepareEnvironment() {
	const testMode = process.env.NODE_ENV === 'test'
	const localEnvPath = `../../.env${testMode ? '.test' : ''}`
	const fullEnvPath = resolvePath(import.meta.url, localEnvPath)
	setEnvFile({ path: fullEnvPath })
	validateEnv()
}

export { prepareEnvironment }
