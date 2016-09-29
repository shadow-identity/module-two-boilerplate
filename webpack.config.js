var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')

module.exports = {
  devServer: {
    host: "localhost",
    port: 8080
  },

  entry: "main.js",


  resolve: {
    root: path.join(__dirname, 'src')
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.(gif|jpg|png|svg)$/,
        loader: 'file'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]

}