const path = require('path');
const webpack = require('webpack');
require('dotenv').config({
    path: './.env.dev'
})

console.log(process.env.REACT_APP_API_KEY)
module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    mode:'development',
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            images: path.join(__dirname, 'src/images')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpeg|jpg|png|svg)$/,
                loader: 'file-loader',
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react'
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env)
        })
    ],
    devtool: 'eval-source-map',
    devServer: {
        port: 5050,
        historyApiFallback: true
    }


}