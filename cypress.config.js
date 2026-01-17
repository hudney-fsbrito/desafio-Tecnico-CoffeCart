const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter:  'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit/results-[hash].xml'
    },
    cypressMochawesomwReporterReporterOptions: {
      charts: true,
      reportPageTitle:  'Relatório de testes',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false
    }
  },
  chromeWebSecurity: false,
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    watchForFileChanges: false,
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: "https://coffee-cart.app/",
    urlCart: "/cart",
    // downloadsFolder: "cypress/downloads",

    setupNodeEvents(on, config) {
      const cucumber = require("cypress-cucumber-preprocessor").default;
      on("file:preprocessor", cucumber());
      require('cypress-mochawesome-reporter/plugin')(on)
      // on("task", {
      //   findDownloadedFile,
      // });
    },
  },
});
