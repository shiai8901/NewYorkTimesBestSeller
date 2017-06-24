var webpack = require('webpack');

module.exports = {
  entry: ['./client/index.js'],
  output: {
    path: __dirname + '/client/',
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
        include: /client/,
        loaders: ["style-loader", "css-loader"]
      }
    ]
  }
};