import { rollup } from "rollup"
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

export default {
    input: 'src/index.js',
    output: [{
        dir: 'dist/index.js',
        format: 'cjs',
    }, 
    {
        dir: 'dist/index.es.js',
        format: 'es',
        exports: 'named'
    }],
    plugins: [
        postcss({
            plugins: [],
            minimize: true
        }),
        babel({
            exclude: 'node_modules/**',
            presets: [[
                "@babel/preset-env",
                {
                  "loose": true,
                  "modules": false,
                  "targets": "defaults"
                }
              ],
              "@babel/preset-react"]
        }),
        external(),
        resolve()
    ],
    external: ['styled-components', 'react', /@babel\/runtime/ ]
}