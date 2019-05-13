import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';
import replace from 'rollup-plugin-replace';

const extensions = [
  '.js', '.jsx', '.ts', '.tsx',
];

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    name: 'lib',
    format: 'umd',
  },
  plugins:
   [
     resolve({ extensions }),
     babel({
       extensions,
       runtimeHelpers: true,
       exclude: 'node_modules/**',
       include: ['src/**/*'],
     }),
     commonjs({
       include: 'node_modules/**',
     }),
     replace({
       'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
     }),
     process.env.NODE_ENV !== 'local' && uglify(),
   ],
};
