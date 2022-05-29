import * as veeValidate from 'vee-validate'
import rules from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'
// eslint-disable-next-line camelcase
import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'
import * as yup from 'yup'
// yup也是提供一些定义好的规则的，跟@vee-validate/rules一样，所以其实是二者选其一就可以了，yup更强大
veeValidate.configure({
	// 配置要写在定义规则的上面，否则中文会有问题
	generateMessage: localize('zh_CN', zh_CN), // 配置语言
	validateOnInput: true, // 配置是否在输入时进行验证
})
Object.keys(rules).forEach(key => {
	// 把所有规则都定义好
	veeValidate.defineRule(key, rules[key])
})
const modules = { yup, ...veeValidate }
export default modules
