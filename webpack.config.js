const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    entry: {
        kintoneクイズアプリ: './src/kintoneクイズアプリ/kintoneクイズアプリ.tsx'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(gif|jpg|jpeg|tiff|png)$/,
                use: 'url-loader',
            },
        ],
    },

    plugins: [new ForkTsCheckerWebpackPlugin()],

    devtool: 'inline-source-map',
    target: ['web', 'es5'],
};