const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

let devConfig = {
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.(sc|c|sa)ss$/,
      use: [
        'style-loader', {
          loader: "css-loader",
          options: { sourceMap: true }
        }, {
          loader: "postcss-loader",
          options: {
            ident: "postcss", sourceMap: true,
            plugins: loader => [require('autoprefixer')()]
          }
        }, {
          loader: "sass-loader",
          options: { sourceMap: true }
        }
      ]
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'), //本地服务器所加载的页面所在的目录
    clinetLogLevel: 'warning', // 可能值有 none, error, warning 或者 info (默认值)
    hot: true,//启动热更新替换特性，需要配合 webpack.HotModuleReplacementPlugin 插件
    host: '0.0.0.0', // 启动服务器的 host
    port: 7000,      // 端口号
    compress: true,  // 为所有服务启用gzip压缩
    overlay: true,  // 在浏览器中显示全屏覆盖
    stats: "errors-only",// 只显示包中的错误
    open: true, // 启用“打开”后，dev服务器将打开浏览器。
    proxy: {   // 设置代理
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "" }
      }
    }
  },
  plugins: [
    new webpack.NamedModulesPlugin(), // 更容易查看（patch）的由來
    new webpack.HotModuleReplacementPlugin() // 替換插件
  ]
}
module.exports = merge(common, devConfig)
