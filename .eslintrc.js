module.exports = {
	parser: 'vue-eslint-parser',

	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	env: {
		browser: true,
		node: true,
		'vue/setup-compiler-macros': true,
	},
	plugins: ['@typescript-eslint'],
	extends: [
		'airbnb-base',
		'plugin:vue/vue3-recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended',
		// 'prettier', //解决prettier和eslint的冲突
		'plugin:prettier/recommended', // 解决prettier和eslint的冲突
	],

	rules: {
		// override/add rules settings here, such as:
		'prettier/prettier': 1,

		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-var': 'off',
		semi: ['error', 'never'], // 强制不使用分号
		// 'quotes': [2, 'single'],//强制使用单引号
		'no-trailing-spaces': 2, // 不允许行末空格
		'no-plusplus': 'off', // 允许使用++
		'no-await-in-loop': 'error', // 禁止在循环中使用await
		'no-unused-vars': 'warn', // 禁止出现未使用的变量
		'vue/custom-event-name-casing': [2, 'camelCase'],
		'import/no-extraneous-dependencies': 'off',
		'import/extensions': 'off', // import不必要扩展名后缀
		'vue/multi-word-component-names': 'off',
		'import/no-unresolved': 'off',
		'no-undef': 'off', // 因为我用了自动引入vue的api，所以我是不用写import ref 这些的，而此时eslint会报错，所以去掉这条规则
	},
}
