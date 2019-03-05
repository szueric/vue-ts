import vue from 'rollup-plugin-vue';
import ts from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';

export default {
	input: 'src/index.ts',
	output: {
		name: 'sample'
	},
	plugins: [
		commonjs(),
		vue({
			css: true,
			compileTemplate: true
		}),
		ts()
	]
};
