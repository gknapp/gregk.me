const webpack = require("webpack")
const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = merge(common, {
  plugins: [
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      template: "./src/index.html"
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
})
