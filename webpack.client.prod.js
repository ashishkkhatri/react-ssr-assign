const path = require('path');
const merge = require("webpack-merge");
const baseConfig = require('./webpack.base.prod');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const  terser = require("rollup-plugin-terser").terser;

const config = {

    // tell webpack the root file of the application(or the entry point of application.)
    entry: './src/client/client.js',
    
    // tell webpack where to put the output file after  it  has been generated.
    output: {
        filename: 'bundle.js',
        // __dirname is reference to currenct working directory that our project is been executed in.
        // public is the folder in which client side bundle.js will be saved.
        path: path.resolve(__dirname, 'public')
    },
    plugins: [
        // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
        // new CleanWebpackPlugin(),
        // new HtmlWebpackPlugin({
        //     title: 'Production',
        // }),
        // new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production"), 
        //                             "process.env.SC_DISABLE_SPEEDY": true 
        //                         })

        // require('rollup-plugin-replace')({
        //     'process.env.NODE_ENV': JSON.stringify('production'),
        //     "process.env.SC_DISABLE_SPEEDY": true 
        // }),
        // require('rollup-plugin-commonjs')(),
        // new TerserPlugin({})
        // terser()
    ],
    // mode: 'production'
};

module.exports = merge(baseConfig, config);