module.exports = {
    // tell webpack to run babel on every file  it runs through.
    module: {
        rules: [{
            test: /\.js?$/,
            // babel loader is the webpack module the that executes babel and traspile out code.
            loader : 'babel-loader',
            // tell not to touch the js files in node_modules.
            exclude: /node_modules/,
            // options to pass along the babel-loader.
            options: {
                presets: [
                    // takes all the JSX and turn it into js function call.
                    'react',
                    // to hadle async code.
                    'stage-0',
                    // run all the different transform rules needed to meet the requirments 
                    // of previous 2 versions of all the populor browsers.
                    ['env', {targets: {browsers: ['last 2 versions']}}]
                ]
            }
        }]
    }
}