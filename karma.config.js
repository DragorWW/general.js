// Karma configuration
// Generated on Sun Jan 15 2017 02:53:55 GMT+0700 (+07)

module.exports = function (config) {
  config.set({
    frameworks: ["mocha", "karma-typescript"],

    files: [
      {pattern: "test/**/*.spec.ts"},
      {pattern: "src/**/*.+(ts|tsx)"},
    ],

    preprocessors: {
      'src/**/*.ts': ['karma-typescript', 'coverage'],
      "**/*.ts": ["karma-typescript"]
    },

    reporters: ["progress", "karma-typescript"],

    karmaTypescriptConfig: {
      tsconfig: "./tsconfig.json"
    },

    logLevel: config.LOG_INFO,

    browsers: ["Chrome"],
  })
};
