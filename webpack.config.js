const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "development",
  entry: {
    lib: "./src/index.ts"
  },
  output: {
    publicPath: "/",
    filename: "[name].js",
    library: "Lib",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: "this"
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.runtime.esm.js"
    },
    extensions: [".vue", ".ts"]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader"
          }
        ]
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              appendTsSuffixTo: ["\\.vue$"],
              happyPackMode: false
            }
          }
        ]
      }
    ]
  },
  plugins: [new VueLoaderPlugin()],
  externals: {
    vue: {
      root: "Vue",
      commonjs2: "vue",
      commonjs: "vue",
      amd: "vue"
    }
  }
};
