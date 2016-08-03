var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve('assets/scripts', 'app.js'),
  output: {
     filename: 'bundle.js',
      path: './dist'
  },

  devtool: 'source-map',

  plugins: [
    new ExtractTextPlugin('bundle.css')
  ],
  module: {
    loaders: [

      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader') },

      { test: /\.(jpe?g|png|gif)$/i, loader: 'url-loader?name=./img/[name].[ext]' },

      { test: /\.(woff|woff(2)?|eot|ttf|svg)$/, loader: 'file?name=fonts/[name].[ext]' },

      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader', { publicPath: './' }) }
    ]
  },
  postcss: function () {
    return [autoprefixer({ browsers: ['last 2 versions'] })];
  }
};
