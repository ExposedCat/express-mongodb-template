import fs from 'fs/promises'

async function readJsonFile(path) {
	try {
		const contents = await fs.readFile(path, 'utf8')
		const data = JSON.parse(contents)
		return {
			error: false,
			data
		}
	} catch (error) {
		return {
			error: true,
			data: null
		}
	}
}

export { readJsonFile }
