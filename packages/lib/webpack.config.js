const path = require('path')
const webpack = require('webpack')
const PrettierPlugin = require('prettier-webpack-plugin')

const banner = `
  brickworkjs
  Copyright (c) brickworkjs
`

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
    library: 'brickworkjs',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
        use: ['url-loader'],
      },
    ],
  },
  plugins: [new PrettierPlugin(), new webpack.BannerPlugin(banner)],
}
