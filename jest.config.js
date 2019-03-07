module.exports = {
	preset: 'ts-jest',
	moduleFileExtensions: ['js', 'ts', 'vue'],
	transform: {
		'.*\\.(vue)$': 'vue-jest'
	},
	testURL: 'http://localhost/'
};
