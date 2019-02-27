module.exports = {
	extends: ['plugin:vue/essential', 'prettier/vue'],
	env: {
		browser: true,
		es6: true,
		node: true
	},
	plugins: [
		'@typescript-eslint',
		'jsdoc',
		'eslint-comments',
		'prettier',
		'vue'
	],
	parserOptions: {
		parser: '@typescript-eslint/parser'
	},
	rules: {
		'vue/html-indent': [
			'error',
			'tab',
			{
				attribute: 1,
				baseIndent: 1,
				closeBracket: 0,
				alignAttributesVertically: true,
				ignores: []
			}
		],
		'vue/html-self-closing': [
			'error',
			{
				html: {
					void: 'always', // 😢 for Prettier
					normal: 'never',
					component: 'always'
				}
			}
		]
	}
};
