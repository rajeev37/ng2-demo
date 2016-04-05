var webpack = require('webpack');
var path = require('path');

module.exports = {
    //entry: './app/client/app.ts',
    entry: {
        'app': './app/client/app.ts',
        'vendor': './app/client/vendor.ts'
    },
    output: {
        path: __dirname + '/bundle',
        filename: "bundle.js"
    },
    stats: {
        modules: false,
        cached: false,
        colors: true,
        chunk: false
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
    ],

    resolve: {
        extensions: ['', '.ts', '.js']
    },

    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' },
            {
                test: /\.html/,
                loader: 'raw'
            }
        ],
        noParse: [ path.join(__dirname, 'node_modules', 'angular2', 'bundles') ]
    },

    devServer: {
        historyApiFallback: true
    }
};
