const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")


const baseConfig = {
    mode: 'production',
    entry: {
        index: './src/index.js',
        'index.min': './src/index.js'
    },
    output: {
        // publicPath: path.resolve(process.cwd(), 'publicAsset'),
        path: path.resolve(process.cwd(), 'dist'),
        filename: '[name].js',
        library: "preLoadRes",
        libraryExport: 'default',
        libraryTarget: 'umd',
        auxiliaryComment: {
            root: 'Root Comment',
            commonjs: 'CommonJS Comment',
            commonjs2: 'CommonJS2 Comment',
            amd: 'AMD Comment'
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: [
                path.resolve(__dirname, 'src')
            ],
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'react',
        //     minChunks: Infinity
        // })
    ],
    optimization: {
        // usedExports: true,
        minimize: true,
        minimizer: [
            new TerserPlugin({ // 使用压缩插件
                include: /\.min\.js$/
            })
        ]
        // minimizer: [new UglifyJsPlugin({
        //     uglifyOptions: {
        //         compress: {
        //             // warnings: false, // 去除警告
        //             drop_debugger: true, // 去除debugger
        //             drop_console: true // 去除console.log
        //         },
        //     },
        //     cache: true, // 开启缓存
        //     parallel: true, // 平行压缩
        //     sourceMap: true // set to true if you want JS source maps
        // })],
        // splitChunks: {
        //     chunks: 'all',
        //     // minSize: 100,
        //     cacheGroups: {
        //         commons: {
        //             name: 'commons',
        //             chunks: 'all',
        //             minChunks: 2
        //         }
        //     }
        // }
    },
}
module.exports = baseConfig;