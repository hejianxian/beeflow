var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: '/Users/hejianxian/Documents/hejx/测试例子/webpack-simple/src/main.js',
  output: {
    path: '/Users/hejianxian/Documents/hejx/测试例子/webpack-simple/dist',
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            
          }
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': '/Users/hejianxian/Documents/hejx/github/beeflow/node_modules/vue/dist/vue.esm.js'
    }
  },
  performance: {
    hints: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: '/Users/hejianxian/Documents/hejx/测试例子/webpack-simple/index.html',
      template: '/Users/hejianxian/Documents/hejx/测试例子/webpack-simple/index.html',
      inject: true
    })
  ]
}
