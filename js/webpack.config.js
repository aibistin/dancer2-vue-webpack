let webpack = require("webpack");
let path = require("path");

module.exports = {
    entry: {
        app: './app.js',
        vendor: ['axios', 'vue'],
    },
    output: {
        path: path.resolve(__dirname, '../public/js'),
        filename: '[name].js',
        publicPath: '../public'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor']
        })
    ]
};

if (process.env.NODE_ENV === 'production') {

    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            sourcemap: true,
            compress: {
                warnings: false
            }
        })
    );
};

module.exports.plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    })
);
