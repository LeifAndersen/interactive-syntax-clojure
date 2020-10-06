const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public', 'js');
const APP_DIR = path.resolve(__dirname, 'src', 'js');

const config = {
    entry: `${APP_DIR}/main.js`,
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
};

module.exports = config;
