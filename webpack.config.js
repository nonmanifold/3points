var path = require('path');
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    watch: true,
    devtool: 'inline-source-map', //just do inline source maps instead of the default
    module: {
        loaders: [
            {
                test: /\.js$/, // .js
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    }
};
