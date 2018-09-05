const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: 'cheap-module-source-map',
    mode: 'development',
    entry: './index.js',
    devServer: {
        open: true,
        contentBase: path.join(__dirname, 'dist'),
    },
    module: {
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html' }),
    ],
};
