import { babel } from '@rollup/plugin-babel';
import resolve from "@rollup/plugin-node-resolve"
import external from "rollup-plugin-peer-deps-external"
import postcss from "rollup-plugin-postcss"
import { terser } from "rollup-plugin-terser"
import svgr from '@svgr/rollup';
import commonjs from "@rollup/plugin-commonjs";

export default [
    {
        input: "./src/index.js",
        external: ["react", "react-dom"],
        plugins: [
            commonjs(),// convert the cjs modules to ES6
            external(),// peer_deps
            resolve(),//handle the node_modules
            babel({
                exclude: 'node_modules/**',
                babelHelpers: "bundled",
                presets: ['@babel/preset-env', '@babel/preset-react']
            }),

            postcss({
                plugins: [require('postcss-import')],
                extract: false,
                minimize: true,
                modules: false,
            }),
            svgr(),
            terser(),
        ],
        output: {
            file: "./dist/index.js",
            format: 'esm',
        },
    }
]