interface ValidFileContents {
	error: false
	data: object
}

interface InvalidFileContents {
	error: true
	data: null
}

type JsonFileContents = ValidFileContents | InvalidFileContents

export { JsonFileContents }
