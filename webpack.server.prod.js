const path = require('path');
const merge = require("webpack-merge");
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

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
    externals:[webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);