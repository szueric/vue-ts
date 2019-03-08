module.exports = {
	preset: 'ts-jest',
	moduleFileExtensions: ['js', 'ts', 'vue'],
	transform: {
		'.*\\.(vue)$': 'vue-jest'
	},
	snapshotSerializers: ['jest-serializer-vue'],
	testURL: 'http://localhost/'
};
