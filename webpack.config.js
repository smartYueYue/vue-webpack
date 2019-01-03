
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: __dirname + "/src/main.js",
  output: {
    path: __dirname + "/dist",
    filename: "index_bundle.js"
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: [
        { loader: 'vue-loader' }  
      ]
    }, {
      test: /\.css$/,
      use: [
        { loader: 'vue-style-loader' }
      ]
    }]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist")
  }
}