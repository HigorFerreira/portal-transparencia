import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import { readFileSync } from 'fs';

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)));

function createConfig(input, output, format, banner = 'client', isDts = false) {
	if (isDts) {
		return {
			input,
			output: [{ file: output, format: 'esm' }],
			plugins: [dts()],
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
			banner: banner ? `'use ${banner}';` : ''
		},
		external: ['react', 'react-dom', 'next'],
		plugins: [
			// TypeScript plugin with proper JSX configuration
			typescript({
				tsconfig: './tsconfig.build.json',
				declaration: false,
				declarationMap: false,
				// Ensure JSX is properly handled
				jsx: 'react-jsx',
				// Explicitly include files
				include: ['src/**/*.ts', 'src/**/*.tsx'],
				// Use the appropriate module system
				module: format === 'esm' ? 'ESNext' : 'CommonJS',
			}),
			resolve({
				browser: format === 'esm',
				preferBuiltins: true,
				extensions: ['.js', '.jsx', '.ts', '.tsx'] // Include TS/TSX extensions
			}),
			commonjs(),
		]
	};
}

export default defineConfig([
	createConfig('./src/modules/server/index.tsx', 'dist/server/index.d.ts', 'esm', undefined, true),
	createConfig('./src/modules/server/index.tsx', 'dist/server/index.esm.js', 'esm', 'server'),
	createConfig('./src/modules/server/index.tsx', 'dist/server/index.cjs.js', 'cjs', 'server'),
]);