const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = (env = {}) => {
  const isProd = env.mode === 'production'

  return {
    mode: isProd ? 'production' : 'development',

    entry: path.resolve(__dirname, 'src', 'index.jsx'),

    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[contenthash].js',
      clean: true,
      publicPath: isProd ? '/react-trainee/' : '/',
    },

    resolve: {
      extensions: ['.js', '.jsx'],
    },

    devServer: {
      port: 3000,
      open: true,
      hot: true,
      historyApiFallback: true,
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
      }),
      new webpack.ProgressPlugin(),
    ],

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  }
}
