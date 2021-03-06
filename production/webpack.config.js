const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  entry: {
	 app: './src/index.js'
  },
  devtool: 'source-map',
  devServer: {
     contentBase: './dist',
	 hot: true
  },
  plugins: [
     new CleanWebpackPlugin(['dist']),
     new HtmlWebpackPlugin({
       title: 'development'
     }),
	 new webpack.NamedModulesPlugin(),
     new webpack.HotModuleReplacementPlugin(),
	 new UglifyJSPlugin({
		  sourceMap: true
	 })
   ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};