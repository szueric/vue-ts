module.exports = {
	extends: ['eslint:recommended', 'prettier', 'prettier/@typescript-eslint'],
	env: {
		browser: true,
		es6: true,
		node: true
	},
	plugins: ['@typescript-eslint', 'jsdoc', 'eslint-comments', 'prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		project: './tsconfig.json'
	},
	rules: {
		// Basic
		indent: [2, 'tab'],
		quotes: [2, 'single', 'avoid-escape'],

		// TypeScript
		'node/no-unsupported-features/es-syntax': 0,
		'no-dupe-class-members': 0,
		'no-unused-vars': 0,
		'@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
		'no-array-constructor': 0,
		'@typescript-eslint/no-array-constructor': 2,
		'@typescript-eslint/adjacent-overload-signatures': 2,
		'@typescript-eslint/no-namespace': [2, { allowDeclarations: true }],
		'@typescript-eslint/prefer-namespace-keyword': 2,
		'@typescript-eslint/no-var-requires': 2,
		'@typescript-eslint/no-object-literal-type-assertion': 2,
		'@typescript-eslint/no-unnecessary-type-assertion': 2,
		'@typescript-eslint/restrict-plus-operands': 2,

		// JSDocs

		// ESLint comments
		'eslint-comments/disable-enable-pair': 'error',
		'eslint-comments/no-duplicate-disable': 'error',
		'eslint-comments/no-unlimited-disable': 'error',
		'eslint-comments/no-unused-disable': 'error',
		'eslint-comments/no-unused-enable': 'error',
		'eslint-comments/no-use': 'off'
	},
	settings: {
		jsdoc: {
			tagNamePreference: {
				param: 'arg',
				returns: 'return'
			}
		}
	}
};
