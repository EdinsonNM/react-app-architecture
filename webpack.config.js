const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const debug = (process.env.NODE_ENV !== 'production');
const config = {
    entry: {
        bundle: [
            './src/index.jsx'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.jsx', '.js']
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        host: '0.0.0.0',
        port: 9000,
        inline: true,
        hot: true
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css/,
                loaders: [
                    'style-loader',
                    `css-loader?${JSON.stringify({
                        sourceMap: debug,
                        modules: true,
                        localIdentName: debug ? '[name]_[local]_[hash:base64:3]' : '[hash:base64:4]',
                        minimize: !debug,
                    })}`,
                    'postcss-loader',
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)(\?.*)$/,
                loader: 'url-loader?limit=10000'
            }
        ]
    },
    externals: {},
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            hash: true,
            chunks: ['bundle'],
            filename: 'index.html',
            inject: 'body'
        }),
        new Dotenv({ path: './.env', safe: false })
    ],
    devtool: 'source-map'
};

if (!debug) {
    config.plugins.push(new webpack.optimize.DedupePlugin());
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            screw_ie8: true,
            warnings: 'verbose',
        },
        mangle: {
            screw_ie8: true,
        },
        output: {
            comments: false,
            screw_ie8: true,
        },
    }));
    config.plugins.push(new webpack.optimize.AggressiveMergingPlugin());
}
module.exports = config;
