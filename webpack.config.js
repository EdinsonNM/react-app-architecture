const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        bundle: [
            "./src/index.js"
        ]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].js"
    },
    resolve: {
        extensions: [".jsx", ".js"]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "public"),
        host: "0.0.0.0",
        port: 8000,
        inline: true,
        hot: true,        
    },
    module: {
        loaders: [
            {
                test:    /\.(js|jsx)$/,
                use:     ["babel-loader"],
                exclude: /node_modules/
            }
        ]
    },
    externals: {},
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html"),
            hash: true,
            chunks: ["bundle"],
            filename: "index.html",
            inject: "body"
        })
    ],
    devtool: "source-map"
}