import path from 'path';
import { HashedModuleIdsPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const buildPath = path.join(__dirname, 'build');
const prodBuild = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: prodBuild ? false : 'cheap-module-eval-source-map',
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    path: buildPath,
    filename: '[name].[contenthash].js',
    publicPath: '/'
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.tsx', '.ts', '.json']
  },
  module: {
    rules: [
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: 'ts-loader',
        },
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                modules: false
                            }
                        ],
                        '@babel/preset-react'
                    ],
                    plugins: [
                        '@babel/plugin-transform-runtime',
                        '@babel/plugin-proposal-class-properties'
                    ]
                }
            }
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            enforce: 'pre',
            use: 'source-map-loader'
        }
    ]
  },
  optimization: {
    usedExports: true,
    runtimeChunk: 'single',
    splitChunks: {
        chunks: 'all',
        // maxAsyncRequests: 20,
        // maxInitialRequests: 5,
        minSize: 10000,
        maxSize: 50000,
        cacheGroups: {
            vendors: {
                test: /[\\/]node_modules[\\/]/,
                reuseExistingChunk: true,
                minChunks: 5,
                priority: -10
            },
            default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true
            }
        }
    },
  },
  performance: {
    hints: false
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HashedModuleIdsPlugin(), // prevents file hashes from changing unexpectedly
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html')
    })
  ],
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    contentBase: buildPath,
    compress: true,
    port: 9000,
    historyApiFallback: true,
    // https: true,
    // http2: true,
    // cert: '.ssl/_wildcard.myevive.dev+3.pem',
    // key: '.ssl/_wildcard.myevive.dev+3-key.pem'
  }
};
