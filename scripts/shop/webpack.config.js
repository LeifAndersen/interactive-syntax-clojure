const path = require('path');
const webpack = require('webpack');
const extraExternals = require('./extra-externals.js');

module.exports = {
    mode: "production",
    //devtool: "inline-source-map",
    externals: Object.assign({
        "react": "React",
        "react-dom": "ReactDOM"
    }, extraExternals),
    externalsType: "this",
    output: {
        library: {
            type: "umd" //"system"
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader',
                      'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                options: { presets: ['@babel/env','@babel/preset-react'] }
            },
            {
                test: /\.wasm$/,
                type: "javascript/auto",
                loader: path.resolve("dynamic-loader.js")
            },
        ]},
    resolve: {
        fallback: {
            assert: require.resolve("assert"),
            buffer: require.resolve("buffer"),
            crypto: require.resolve("crypto-browserify"),
            os: require.resolve("os-browserify/browser"),
            path: require.resolve("path-browserify"),
            stream: require.resolve("stream-browserify"),
            zlib: require.resolve("browserify-zlib"),
            fs: false,
        }
    },
    plugins: [
        new webpack.NormalModuleReplacementPlugin(/node:/, (resource) => {
            resource.request = resource.request.replace(/^node:/, "");
        }),
    ]
};
