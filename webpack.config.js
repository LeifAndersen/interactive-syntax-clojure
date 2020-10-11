const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public', 'js');
const APP_DIR = path.resolve(__dirname, 'src', 'js');

const config = {
    entry: `${APP_DIR}/bundle.js`,
    target: 'web',
    output: {
        path: BUILD_DIR,
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ],
            },
        ],
    },
    node: {
        // For stopify
        'fs': 'empty',
        'child_process': 'empty',
        'net': 'empty',
        'module': 'empty'
    },
};

module.exports = config;
