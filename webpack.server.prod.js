const path = require('path');
const merge = require("webpack-merge");
const baseConfig = require('./webpack.base.prod');
const webpackNodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const  terser = require("rollup-plugin-terser").terser;

const config = {
    // inform webpack that we are building a bundle for nodejs rather than browser.

    target: 'node',

    // tell webpack the root file of the application(or the entry point of application.)
    entry: './src/index.js',
    
    // tell webpack where to put the output file after  it  has been generated.
    output: {
        filename: 'bundle.js',
        // __dirname is reference to currenct working directory that our project is been executed in.
        // build is the folder in which bundle.js will be saved.
        path: path.resolve(__dirname, 'build')
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
        require('rollup-plugin-replace')({
            'process.env.NODE_ENV': JSON.stringify('production'),
            "process.env.SC_DISABLE_SPEEDY": true 
        }),
        require('rollup-plugin-commonjs')(),
        // new TerserPlugin({})
        terser()
    ],
    externals:[webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);