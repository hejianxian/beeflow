var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var pwdPath = require('../../lib/get-pwd')()

var env = require('babel-preset-env');
var stage2 = require('babel-preset-stage-2');
var runtime = require('babel-plugin-transform-runtime');

function fixpath(dir) {
  return path.join(pwdPath, dir);
}

module.exports = {
  entry: {
    app: fixpath('./src/main.js')
  },
  output: {
    path: fixpath('./dist'),
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    modules: [path.resolve(__dirname, "../../node_modules")],
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': path.resolve(__dirname, '../../node_modules/vue/dist/vue.esm.js'),
      '@': fixpath('./src')
    }
  },
  context: path.resolve(__dirname, '../../'),
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        include: [fixpath('./src')],
        loader: 'babel-loader',
        options: {
          "babelrc": false,
          "comments": false,
          "presets": [
            [require.resolve('babel-preset-env'), {
              modules: false
            }],
            require.resolve('babel-preset-stage-2')
          ],
          "plugins": [
            require.resolve('babel-plugin-transform-runtime')
          ]
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
