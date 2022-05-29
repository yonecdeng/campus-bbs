import apis from '@/apis/axios/index'

export interface IArticleDataResult {
	id: number
	title: string
	content: string
}
const articleApis = {
	info() {
		return apis.request<IArticleDataResult[]>({
			// 泛型里传递的是返回的数据data里的result的类型
			url: '/article',
		})
	},
}
export default articleApis
