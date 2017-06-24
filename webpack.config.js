var webpack = require('webpack');

module.exports = {
  entry: ['./public/index.js'],
  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        include: /public/,
        loaders: ["style-loader", "css-loader"]
      }
    ]
  }
};