import fs from 'fs/promises'

// TODO: Move to types directory
interface ValidFileContents {
	error: false
	data: object
}

interface InvalidFileContents {
	error: true
	data: null
}

type JsonFileContents = ValidFileContents | InvalidFileContents

async function readJsonFile(path: string): Promise<JsonFileContents> {
	try {
		const contents = await fs.readFile(path, 'utf8')
		const data = JSON.parse(contents) as object
		// TODO: Use resonse generation function
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
