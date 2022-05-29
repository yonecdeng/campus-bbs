import { MockMethod } from 'vite-plugin-mock'
import { Random } from 'mockjs'

export default [
	{
		url: '/api/article',
		method: 'get',
		response: () => {
			return {
				code: 0,
				message: 'success',
				result: new Array(20).fill(0).map((article, index) => {
					return {
						id: index,
						title: Random.ctitle(),
						content: Random.cparagraph(),
					}
				}),
			}
		},
	},
] as MockMethod[]
