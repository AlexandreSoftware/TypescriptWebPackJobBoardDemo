const path = require('path');
const file_loader = require("file-loader")
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/index.ts',
  mode:"production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test:/\.html$/,
        use: [
          'html-webpack-plugin'
        ]
      },
    ],
  },
  devServer: {
    static: "./pub",
    port: 9000
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js',],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'pub'),
  },
  plugins:[
    new CopyPlugin(
      {
        patterns:[
          { from: "src/files", to: "files" },
          { from: "src/index.html", to: "index.html" },
        ]
      }

    )

  ]
};