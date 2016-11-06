var path = require('path');
const webpackConfig = require('./webpack.config');
webpackConfig.module.loaders = [
    {
        test: /\.js$/, // .js
        loader: 'babel',
        exclude: [/node_modules/, /tests/],
        query: {
            presets: ['airbnb'],
            plugins: ['transform-class-properties', 'istanbul']
        }
    },
    {
        test: [/\.spec\.js$/, /\.js$/], // .spec.js & .js
        include: [/tests/],
        loader: 'babel',
        exclude: /node_modules/
    }
];
module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'src/tests/**/*.spec.js'
        ],

        preprocessors: {
            // add webpack as preprocessor
            'src/tests/**/*.spec.js': ['webpack']
        },

        webpack: webpackConfig,

        webpackServer: {
            noInfo: true //please don't spam the console when running in karma!
        },

        plugins: [
            'karma-webpack',
            'karma-jasmine',
            'karma-sourcemap-loader',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-coverage'
        ],

        coverageReporter: {
            reporters: [
                {
                    type: 'lcov',
                    file: 'lcov.info'
                }
            ]
        },
        reporters: ['progress', 'coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false
    })
};
