const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const RuntimeAnalyzerPlugin = require('webpack-runtime-analyzer');

const env = process.env.NODE_ENV;

const isDebug = env !== 'production';

const VENDOR_LIBS = [
  'react',
  'react-dom',
  'react-redux',
  'react-router-dom',
  'react-router',
  'redux',
  'redux-thunk',
  'material-ui',
  'material-ui-icons'
];

module.exports = {
  devtool: isDebug ? 'source-map' : '',
  entry: {
    bundle: ['./src/index.tsx'],
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    publicPath: '/',
  },

  resolve: {
    modules: [
      'src',
      'node_modules',
    ],
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'tslint-loader',
        options: { /* Loader options go here */ },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: isDebug,
                importLoaders: 1,
                minimize: !isDebug,
                discardComments: { removeAll: true },
              },
            },
            {
              loader: 'postcss-loader',
            },
          ],
        }),
      },
      {
        test: /\.(eot|woff|woff2)$/,
        loader: 'file-loader?name=fonts/[name].[ext]',
      },
      {
        test: /\.svg$/,
        loader: 'file-loader',
        query: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  devServer: {
    historyApiFallback: true,
  },
};
