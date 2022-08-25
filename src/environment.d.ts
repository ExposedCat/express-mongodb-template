export declare global {
	namespace NodeJS {
		interface ProcessEnv {
			JWT_SECRET: string
			SESSION_SECRET: string
			DB_CONNECTION_STRING: string
			PORT: number
		}
	}
}
