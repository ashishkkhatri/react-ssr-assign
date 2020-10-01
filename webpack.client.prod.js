const path = require('path');
const merge = require("webpack-merge");
const baseConfig = require('./webpack.base');

const config = {

    // tell webpack the root file of the application(or the entry point of application.)
    entry: './src/client/client.js',
    
    // tell webpack where to put the output file after  it  has been generated.
    output: {
        filename: 'bundle.js',
        // __dirname is reference to currenct working directory that our project is been executed in.
        // public is the folder in which client side bundle.js will be saved.
        path: path.resolve(__dirname, 'public')
    }
};

module.exports = merge(baseConfig, config);