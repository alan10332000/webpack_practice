const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    noParse: function (content) { return /jquery|lodash/.test(content); },
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: [path.resolve(__dirname, 'src/')],
        use: ['file-loader']
      },
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }],
        exclude: /(node_modules|bower_components)/,
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack_practice",
      filename: "main.html",
      template: path.resolve(__dirname, 'src/index.html'),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeAttributeQuotes: true,
      }
    }),
    new CleanWebpackPlugin()
  ],
}
