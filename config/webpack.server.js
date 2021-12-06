const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

const isDevMod = process.env.NODE_ENV === 'development';

const dirname = path.resolve(__dirname, '../src');

module.exports = {
    mode: process.env.NODE_ENV,
    name: 'server',
    target: 'node',
    entry: './src/server-renderer.js',
    externals: [nodeExternals()],
    output: {
        filename: 'js/serverRenderer.js',
        libraryTarget: 'commonjs2',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', 'json'],
        modules: [path.resolve(dirname), 'node_modules'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                ],
            },
        ],
    },
};
