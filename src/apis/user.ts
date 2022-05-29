import apis from '@/apis/axios/index'

export interface infoDataResult {
	name: string
	age: number
}
interface loginDataResult {
	token: string
}
export interface ILoginData {
	account: string
	password: string
}
const userApis = {
	info() {
		return apis.request<infoDataResult>({
			// 泛型里传递的是返回的数据data里的result的类型
			url: '/info',
		})
	},
	login(params: ILoginData) {
		return apis.request<loginDataResult>({
			url: '/login',
			method: 'post',
			data: params,
		})
	},
}
export default userApis
