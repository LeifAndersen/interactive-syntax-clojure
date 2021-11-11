module.exports = {
    mode: "production",
    //devtool: "inline-source-map",
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
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
        ]}
};
