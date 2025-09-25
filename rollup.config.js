import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import { readFileSync } from 'fs';

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)));

/**
 * @param {'client' | 'server' | undefined} banner 
 */
function bannerPlugin(banner = 'esm'){
	return {
		name: 'banner-plugin',
		/**
		 * 
		 * @param {string} code 
		 * @param {string} id 
		 */
		transform(code, id){
			console.log('banner-plugin', { id, banner })
			if(banner === undefined) return code
			if(id.endsWith('.ts') || id.endsWith('.tsx') || id.endsWith('.js') || id.endsWith('.jsx')) {
				const new_code = code.replace(/^((?:\n|.)*)/gm, `'use ${banner}';\n$1`)
				console.log(new_code)
				return new_code
			}
		}
	}
}



/**
 * 
 * @param {string} input 
 * @param {string} output 
 * @param {'esm' | 'cjs'} format
 * @param {'client' | 'server' | undefined} banner 
 * @param {boolean} isDts 
 * @returns 
 */
function createConfig(input, output, format, banner = 'client', isDts = false) {
	if (isDts) {
		return {
			input,
			output: [{ file: output, format: 'esm' }],
			plugins: [
				dts()
			],
			external: ['react', 'react-dom', 'next']
		};
	}

	return {
		input,
		output: {
			file: output,
			format,
			exports: 'named',
			sourcemap: true,
		},
		external: ['react', 'react-dom', 'next'],
		jsx: 'react-jsx',
		banner: '"user server";',
		plugins: [
			bannerPlugin(banner),
			resolve({
				browser: format === 'esm',
				preferBuiltins: true
			}),
			commonjs(),
			typescript({
				tsconfig: './tsconfig.build.json',
				declaration: false,
				declarationMap: false
			}),
		]
	};
}

export default defineConfig([
	createConfig('./src/modules/server/index.tsx', 'dist/server/index.d.ts', 'esm', undefined, true),
	createConfig('./src/modules/server/index.tsx', 'dist/server/index.esm.js', 'esm', 'server'),
	createConfig('./src/modules/server/index.tsx', 'dist/server/index.cjs.js', 'cjs', 'server'),
]);