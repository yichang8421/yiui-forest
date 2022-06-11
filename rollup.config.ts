import esbuild from "rollup-plugin-esbuild";
import vue from "rollup-plugin-vue";
// @ts-ignore
import scss from "rollup-plugin-scss";
// @ts-ignore
import dartSass from "sass";
import {terser} from "rollup-plugin-terser";

export default {
    input: "src/lib/route.ts",
    output: {
        globals: {
            vue: "Vue"
        },
        name: "Forest",
        file: "dist/lib/forest.js",
        format: "umd",
        plugins: [terser()]
    },
    plugins: [
        scss({include: /\.scss$/, sass: dartSass}),
        esbuild({
            include: /\.[jt]s$/,
            minify: process.env.NODE_ENV === "production",
            target: "es2015"
        }),
        vue({
            include: /\.vue$/,
        })
    ],
};