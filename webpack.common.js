/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template.html',
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [ 
        {
          from: path.resolve(__dirname, './src/assets/'),
          to: path.resolve(__dirname, 'dist/assets/'),
        }
      ]
    }),
    new MiniCssExtractPlugin(),
  ],
};
