const dotenv = require('dotenv');
const { DefinePlugin } = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    return {
        entry: path.join(__dirname, 'src', 'index.tsx'),
        mode: env.mode,
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: '[name].bundle.js',
            clean: true,
        },
        target: 'web',
        devServer: {
            port: '3000',
            static: {
                directory: path.join(__dirname, 'public'),
            },
            open: true,
            hot: true,
            liveReload: true,
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: 'babel-loader',
                },
                {
                    test: /\.(ts|tsx)$/,
                    use: 'ts-loader',
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'public', 'index.html'),
            }),
            new DefinePlugin({
                'process.env': JSON.stringify(dotenv.config().parsed)
            })
        ],
        optimization: {
            runtimeChunk: 'single',
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all'
                    },
                }
            }
        },
    }
}
