const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, 'src/main/react'),
    mode: 'development',
    entry: {
        main: './Main.js', // 여러 페이지 설정이 가능함
        user: './User.js',
        // mypage: './Mypage.js',
        // profile: './profile.js'
    },
    devtool: 'source-map',
    cache: true,
    output: {
        path: path.resolve(__dirname, 'src/main/resources/static/bundle'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser'
        })
    ]
};
