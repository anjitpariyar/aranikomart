const webpack = require('webpack');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const BundleSizeAnalyzerPlugin = require('webpack-bundle-size-analyzer').WebpackBundleSizeAnalyzerPlugin;
module.exports = {
  mode: 'production',
  entry: {
    main: path.resolve(__dirname, 'src', 'js', 'sources', 'onloads.js'),
    jquery: path.resolve(__dirname, 'src', 'js', 'sources', 'jqueryDependent.js'),
  },
  watch: false,
  output: {
    path: __dirname + '/dist',
    publicPath: '/dist/js/',
    filename: "[name].bundle.js",
    chunkFilename: '[name].vendor.js'
  },
  module: {
    rules: [{
      test: /(\.js)?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: { presets: ['@babel/preset-env'] },
    }, {
      test: /\.css?$/,
      loader: 'css-loader'
    }]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.LOCAL': JSON.stringify('false')
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      defaultSizes: 'gzip',
      generateStatsFile: true,
      openAnalyzer: false,
    }),
    new BundleSizeAnalyzerPlugin('./repot-size.txt')
  ],
  devtool: 'source-map',
};