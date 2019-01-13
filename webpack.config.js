const TITLE = 'Webapp';



const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
    plugins: [
        new HtmlWebpackPlugin({
            title: TITLE
        })
    ],
  module: {
         rules: [
           {
             test: /\.scss$/,
             use: [
               'style-loader',
               'css-loader',
               'sass-loader'
             ]
           },
           {
              test: /\.(png|svg|jpg|gif)$/,
              use: [
                'file-loader'
              ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
         ]
    }
};