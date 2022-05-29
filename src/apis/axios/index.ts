// 实例化一个axios出来使用
import Axios from '@/apis/axios/Axios'

const apis = new Axios({
	baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
	timeout: 5000,
	headers: {},
})
export default apis
