const path = require('path');

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
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      }
    ],
  },
  devServer: {
    static: "./pub",
    port: 9000
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js','css','sass','scss'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'pub'),
  },
  plugins:[
  ]
};