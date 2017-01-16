var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // This is the "main" file which should include all other modules
  entry: './client/main.js',
  // Where should the compiled file go?
  output: {
    path: './dist',
    filename: '[name].[chunkhash].js'
  },
  debug: true,
  progress: true,
  colors: true,
  resolve: {
    extensions: ['', '.js', '.vue', '.json'],
    fallback: ['node_modules'],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
    }
  },
  plugins: [
    new ExtractTextPlugin('assets/css/[name].[contenthash].css'),
    new HtmlWebpackPlugin({template: 'index.html', inject: true})
  ],
  module: {
    loaders: [
      {
        // Ask webpack to check: If this file ends with .js, then apply some transforms
        test: /\.js$/,
        // Transform it with babel
        loader: 'babel',
        // don't transform node_modules folder (which don't need to be compiled)
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('vue-style', 'css')
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.(ico|png|jpg|gif|svg|eot|ttf|woff|woff2)(\?.+)?$/,
        loader: 'url-loader?limit=50000'
      }
    ]
  }
}
