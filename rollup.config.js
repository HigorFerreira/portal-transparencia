import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

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
		external: (id) => {
			// Externalize React and its JSX runtime
			if (id === 'react' || id === 'react/jsx-runtime' || id === 'react/jsx-dev-runtime' || 
				id === 'react-dom' || id === 'next') {
				return true;
			}
			return !id.startsWith('.') && !id.startsWith('/');
		},
		plugins: [
			resolve({
				browser: format === 'esm',
				preferBuiltins: true,
				extensions: ['.js', '.jsx', '.ts', '.tsx']
			}),
			commonjs(),
			// TypeScript for type checking (but not transpilation)
			typescript({
				tsconfig: './tsconfig.build.json',
				declaration: false,
				declarationMap: false,
				noEmit: true, // Don't emit files, just type check
			}),
			// Babel for transpilation with automatic JSX runtime
			babel({
				babelHelpers: 'bundled',
				extensions: ['.ts', '.tsx', '.js', '.jsx'],
				presets: [
					[
						'@babel/preset-react',
						{
							runtime: 'automatic' // This enables automatic JSX runtime
						}
					],
					[
						'@babel/preset-typescript',
						{
							allExtensions: true,
							isTSX: true
						}
					]
				],
				exclude: 'node_modules/**',
			}),
		]
	};
}

export default defineConfig([
	createConfig('./src/modules/server/index.tsx', 'dist/server/index.d.ts', 'esm', undefined, true),
	createConfig('./src/modules/server/index.tsx', 'dist/server/index.esm.js', 'esm', 'server'),
	createConfig('./src/modules/server/index.tsx', 'dist/server/index.cjs.js', 'cjs', 'server'),
]);