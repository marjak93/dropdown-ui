import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

export default {
  input: "./src/components/index.js",
  output: {
    file: "./dist/index.js",
    format: "cjs",
  },
  plugins: [
    postcss({
      modules: true,
    }),
    babel({ exclude: "node_modules/**" }),
    external(),
    resolve({
      browser: true,
      extensions: [".mjs", ".js", ".jsx", ".json", ".jsx"],
    }),
    commonjs(),
  ],
};
