import axios, { AxiosRequestConfig } from 'axios'
import { ResponseData } from '@/apis/axios/types'
import { getToken, removeToken } from '@/utils/storage/token-operator'
import router from '@/router'

export default class Axios {
	private instance

	constructor(config: AxiosRequestConfig) {
		this.instance = axios.create(config)
		this.interceptorsRequest()
		this.interceptorsResponse()
	}

	public async request<
		ResponseDataResult,
		T = ResponseData<ResponseDataResult>, // 这里的泛型为啥这样定义，需要结合axios的request方法的类型定义去理解
	>(config: AxiosRequestConfig): Promise<T> {
		// 异步方法必须返回一个Promise对象
		// 做好传入参数的类型声明和返回值的类型声明
		try {
			const response = await this.instance.request<T>(config)
			return response.data // !!直接返回response里的data里的内容
		} catch (error) {
			return Promise.reject(error) // 怎么处理这个错误比较合理呢？？？
		}
	}

	private interceptorsRequest() {
		this.instance.interceptors.request.use(
			config => {
				// eslint-disable-next-line no-param-reassign
				config.headers = {
					Authorization: `Bearer${getToken()}`,
				}
				return Promise.resolve(config)
			},
			error => {
				return Promise.reject(error)
			},
		)
	}

	private interceptorsResponse() {
		this.instance.interceptors.response.use(
			response => {
				// 2xx 范围内的状态码都会触发该函数。
				return Promise.resolve(response)
			},
			error => {
				switch (error.response.status) {
					case 401: // token失效了
						removeToken()
						router.push({ name: 'login' })
						break
					case 422:
						break
					default:
						break
				}
				// 超出 2xx 范围的状态码都会触发该函数。
				return Promise.reject(error)
			},
		)
	}
}
