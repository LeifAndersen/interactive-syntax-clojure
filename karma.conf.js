// Karma configuration
// Generated on Thu Nov 12 2020 01:27:47 GMT-0500 (Eastern Standard Time)

module.exports = function(config) {
  config.set({

      // base path that will be used to resolve all patterns (eg. files, exclude)
      basePath: 'public',

      // frameworks to use
      // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
      frameworks: ['cljs-test'],


      // list of files / patterns to load in the browser
      files: [
          'js/test/goog/base.js',
          'js/test/cljs_deps.js',
          'js/main.js',
          {pattern: 'js/**/*.js',
           included: false, watched: false, served: true},
      ],

      client: {
          args: ['interactive_syntax.test.run_all']
      },

      // test results reporter to use
      // possible values: 'dots', 'progress'
      // available reporters: https://npmjs.org/browse/keyword/karma-reporter
      reporters: ['progress'],


      // web server port
      port: 9876,

      // enable / disable colors in the output (reporters and logs)
      colors: true,

      // level of logging
      // possible values: config.LOG_DISABLE || config.LOG_ERROR
      //   || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
      logLevel: config.LOG_INFO,


      // enable / disable watching file
      // and executing tests whenever any file changes
      autoWatch: true,


      // start these browsers
      // available browser launchers:
      // https://npmjs.org/browse/keyword/karma-launcher
      browsers: ['Chrome', 'Firefox'],


      // Continuous Integration mode
      // if true, Karma captures browsers, runs the tests and exits
      singleRun: true,

      // Concurrency level
      // how many browser should be started simultaneous
      concurrency: Infinity
  });
};
