// 定义网络请求回来的对象里面的data字段下的数据类型
export interface ResponseData<T> {
	// 泛型T就是定义result的数据类型
	code: number
	message: string
	result: T
}
