const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            // JavaScript Loader
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            // CSS and SASS Files loaders
            {
                test: /\.css$/,
                use: [
                    process.env.NODE_ENV === 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.s(c|a)ss$/,
                use: [
                    process.env.NODE_ENV === 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            // Pug loader
            {
                test: /\.pug$/,
                use: ['html-loader', 'pug-html-loader'],
            }
        ]
    },
    plugins: [
        // This plugin will generate the CSS files with input name in the dist folder
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: "[id].css"
        }),
        // This plugin will generate the html file for the index.pug file in the dist folder
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/views/index.pug'
        })
    ]
}