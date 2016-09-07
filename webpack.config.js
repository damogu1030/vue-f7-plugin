var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: {
		index: './src/index.js',
	},
	output: {
		path: './',
		publicPath: '/',
		filename: '[name].js',
	},
	devtool: false,
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
	    compress: {
	      warnings: false
	    }
	  }),
	],
};