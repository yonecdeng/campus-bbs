import { randomUUID } from 'crypto'
import { MockMethod } from 'vite-plugin-mock'

export default [
	{
		url: '/api/info',
		method: 'get',
		response: () => {
			return {
				code: 0,
				message: 'success',
				result: {
					name: 'vben',
					age: 18,
				},
			}
		},
	},
	{
		url: '/api/login',
		method: 'post',
		timeout: 2000,
		response: {
			code: 0,
			message: 'success',
			result: {
				token: randomUUID(),
			},
		},
	},
	{
		url: '/api/text',
		method: 'post',
		rawResponse: async (req, res) => {
			let reqbody = ''
			await new Promise(resolve => {
				req.on('data', chunk => {
					reqbody += chunk
				})
				req.on('end', () => resolve(undefined))
			})
			res.setHeader('Content-Type', 'text/plain')
			res.statusCode = 200
			res.end(`hello, ${reqbody}`)
		},
	},
] as MockMethod[]
