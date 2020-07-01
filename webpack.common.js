const webpack = require("webpack")
const CssExtract = require("mini-css-extract-plugin")

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/build",
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
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-object-rest-spread"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [CssExtract.loader, "css-loader"]
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
          minimize: {
            removeComments: true
          }
        }
      }
    ]
  },
  plugins: [
    new CssExtract(),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      AOS: 'aos'
    })
  ]
}
