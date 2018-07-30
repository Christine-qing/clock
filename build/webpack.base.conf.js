var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  //webpack的入口文件
  entry: {
    app: './src/main.js'
  },
  //webpack的输出文件
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
   /**
   * 当webpack试图去加载模块的时候，它默认是查找以 .js 结尾的文件的，
   * 它并不知道 .vue 结尾的文件是什么鬼玩意儿，
   * 所以我们要在配置文件中告诉webpack，
   * 遇到 .vue 结尾的也要去加载，
   * 添加 resolve 配置项，如下：
   */

  resolve: {
    extensions: ['.js', '.vue', '.json'],
    //创建别名
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  //不同类型模块的处理规则，使用不同的loader处理不同的文件
  module: {
    rules: [
      // 对所有.vue文件使用vue-loader 进行编译
      {
        test: /\.vue$/,
        use: [{
          loader: 'vue-loader',
          options: {}
        },
        {
          loader: 'iview-loader',
          options: {
            prefix: false
          }

        }]

      },
      // 对src和test文件夹下的.js文件使用babel-loader将es6转成es5
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
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
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
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
