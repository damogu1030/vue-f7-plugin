var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');

const srcPath = path.resolve('src/demo/');
const distPath = path.resolve('demo/');

module.exports = {
	context: srcPath,
	entry: {
		app: './main.js',
	},
	output: {
		path: distPath,
		publicPath: '/',
		filename: 'js/[name].js',
		chunkFilename: 'js/[name].js',
	},
	devtool: '#cheap-module-eval-source-map',
	devServer: {
		contentBase: distPath,
		outputPath: distPath,
		hot: true,
		stats: {
			colors: true,
    	modules: false,
    	children: false,
    	chunks: false,
    	chunkModules: false,
		},
	},
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue',
			},
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
			},
			{
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
		],
	},
	plugins: [
		new CopyWebpackPlugin([
	    {
	    	from: '**/*.html',
	    }
    ], {
    	ignore: ['index.html'],
    	copyUnmodified: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new ExtractTextPlugin('css/[name].css'),
	],
};

if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = false;
	module.exports.output.publicPath = '';
	module.exports.plugins = (module.exports.plugins || []).concat([
	  new webpack.DefinePlugin({
	    'process.env': {
	      NODE_ENV: '"production"'
	    }
	  }),
	  new webpack.optimize.UglifyJsPlugin({
	    compress: {
	      warnings: false
	    }
	  }),
	]);
}