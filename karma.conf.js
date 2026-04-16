module.exports = function (config) {
  config.set({
    frameworks: ["ui5"],
    ui5: {
      type: "application",
      paths: {
        webapp: "webapp"
      },
      configPath: "ui5-mock.yaml",
      testpage: "webapp/test/integration/opaTests.qunit.html"
    },
    browsers: ["ChromeHeadless"],
    browserNoActivityTimeout: 60000,
    singleRun: true,
    reporters: ["progress"],
    plugins: [
      require("karma-ui5"),
      require("karma-chrome-launcher")
    ]
  });
};
