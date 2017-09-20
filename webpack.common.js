const ExtractTextPlugin = require("extract-text-webpack-plugin")
const webpack = require("webpack")

module.exports = {
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "js/bundle.js"
  },
  resolve: {
    alias: {
      css: __dirname + "/assets/css",
      js: __dirname + "/assets/js",
      images: __dirname + "/assets/images"
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|assets)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(woff2?|ttf|eot|gif|jpe?g|png|svg)$/i,
        loader: "file-loader",
        options: {
          name: "./images/[name].[ext]"
        }
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          removeComments: true
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      AOS: 'aos'
    }),
    new ExtractTextPlugin("style.css")
  ]
}
