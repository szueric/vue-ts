import * as Rollup from 'rollup';
import argv from 'argv';
// @ts-ignore
import commonjs from 'rollup-plugin-commonjs';
import fs from 'fs';
import path from 'path';
// @ts-ignore
import resolve from 'rollup-plugin-node-resolve';
// @ts-ignore
import { terser } from 'rollup-plugin-terser';
// @ts-ignore
import ts from 'rollup-plugin-typescript';
// @ts-ignore
import util from 'util';
import vue from 'rollup-plugin-vue';

type Format = 'es' | 'umd' | 'amd' | 'cjs' | 'system' | 'esm' | 'iife';

const readdir = util.promisify(fs.readdir);

const args = argv.run().targets;
const arg0 = args[0] || '';
const arg1 = args[1] || 'es';

const targetDir = path.resolve(process.cwd(), arg0);
const formats = arg1.split(',') as Format[];

const plugins: Rollup.Plugin[] = [
	ts(),
	vue({
		css: true
	}),
	resolve({
		only: ['vue-property-decorator', 'vue-class-component']
	}),
	commonjs()
];

const pluginsUM = [
	...plugins,
	terser({
		output: {
			comments: /^!|^\*/
		}
	})
];

console.info(`Target Dir: ${targetDir}`); // eslint-disable-line no-console
console.info(`Formats: ${formats.join(', ')}`); // eslint-disable-line no-console

async function build() {
	const fileList = await readdir(targetDir);
	const componentList = fileList
		.map(file => path.parse(path.join(targetDir, file)))
		.filter(file => file.ext === '.vue');

	for (const componentFile of componentList) {
		const inputOptions: Rollup.RollupOptions = {
			input: `${componentFile.dir}/${componentFile.base}`,
			plugins
		};
		const inputOptionsUM: Rollup.RollupOptions = {
			input: `${componentFile.dir}/${componentFile.base}`,
			plugins: pluginsUM
		};

		const bundleES = await Rollup.rollup(inputOptions);
		const bundleUM = await Rollup.rollup(inputOptionsUM);

		for (const format of formats) {
			const bundle = format === 'es' ? bundleES : bundleUM;
			const name = format === 'es' ? 'index' : format;
			const ext = format === 'es' ? 'mjs' : 'js';
			const file = path.resolve(
				'dist',
				componentFile.name,
				`${name}.vue.${ext}`
			);
			await bundle.write({
				name: componentFile.name.replace(/-+([a-z])/g, ($0, $1) =>
					($1 || '').toUpperCase()
				),
				globals: {
					vue: 'Vue'
				},
				format,
				file
			});
		}
	}
}

build();
