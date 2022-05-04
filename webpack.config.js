const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // mode: 'development',
    entry: path.join(__dirname, '/src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/page/index.html'),
            filename: 'index.html'
        })
    ],

    devServer: {
        open: true,
        port: 3000
    }
}