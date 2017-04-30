module.exports = function(config) {
    config.set({

        basePath: "",
        frameworks: ["jasmine"],
        files: [
            "bower_components/angular/angular.js",
            "bower_components/angular-mocks/angular-mocks.js",
            "ps-movies/module.js",
            "ps-movies/**/*.js"
        ],
        exclude: [],
        preprocessors: {},
        reporters: ["spec"],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ["Chrome", "PhantomJS"],
        singleRun: false,
        concurrency: Infinity
    });
};
