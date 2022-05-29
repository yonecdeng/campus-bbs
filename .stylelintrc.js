module.exports = {
	extends: ['stylelint-config-standard-scss', 'stylelint-config-rational-order', 'stylelint-config-prettier'],
	defaultSeverity: 'error',
	plugins: ['stylelint-order'],
	rules: {
		indentation: 4,
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['plugin'],
			},
		],
		'rule-empty-line-before': [
			'always',
			{
				except: ['after-single-line-comment', 'first-nested'],
			},
		],
		'selector-pseudo-class-no-unknown': [
			true,
			{
				ignorePseudoClasses: ['deep'],
			},
		],
	},
}
