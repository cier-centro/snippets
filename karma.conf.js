//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: '.',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src/**/*.js',
      'src/**/*.html',
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter',  
      'karma-ng-html2js-preprocessor'

    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    preprocessors: {
        "src/**/*.html": ["ng-html2js"]
    },

    ngHtml2JsPreprocessor: {
        // If your build process changes the path to your templates,
        // use stripPrefix and prependPrefix to adjust it.
        // stripPrefix: "app/",
        //prependPrefix: "/static/totemFront/",

        // the name of the Angular module to create
        moduleName: "my.templates"
    },


  });
};