const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public', 'js');
const APP_DIR = path.resolve(__dirname, 'src', 'js');

const config = env => {
    return {
        entry: `${APP_DIR}/bundle-${env}.js`,
        target: 'web',
        output: {
            path: BUILD_DIR,
            filename: 'main.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    enforce: 'pre',
                    use: ['source-map-loader'],
                },
                {
                    test: /\.css$/,
                    use: ['style-loader',
                          'css-loader',
                         ],
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: ['file-loader'],
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: ['file-loader'],
                },
            ],
            // REQUIRED to avoid issue "Uncaught TypeError:
            // BrowserFS.BFSRequire is not a function"
            // See: https://github.com/jvilk/BrowserFS/issues/201
            noParse: /browserfs\.js/,
        },
        node: {
            // For stopify
            'fs': 'empty',
            'child_process': 'empty',
            'net': 'empty',
            'module': 'empty',
            // For BrowserFS
            process: false,
            Buffer: false
        },
        resolve: {
            // For BrowserFS
            // Use our versions of Node modules.
            alias: {
                'fs': 'browserfs/dist/shims/fs.js',
                'buffer': 'browserfs/dist/shims/buffer.js',
                'path': 'browserfs/dist/shims/path.js',
                'processGlobal': 'browserfs/dist/shims/process.js',
                'bufferGlobal': 'browserfs/dist/shims/bufferGlobal.js',
                'bfsGlobal': require.resolve('browserfs')
            }
        },
        plugins: [
            // Expose BrowserFS, process, and Buffer globals.
            // NOTE: If you intend to use BrowserFS in a script tag, you do not need
            // to expose a BrowserFS global.
            new webpack.ProvidePlugin({ BrowserFS: 'bfsGlobal',
                                        process: 'processGlobal',
                                        Buffer: 'bufferGlobal' }),
            new webpack.SourceMapDevToolPlugin({
                filename: "[file].map"
            }),
        ],
        //devtool: 'eval-cheap-source-map',
    };
};

module.exports = config;
