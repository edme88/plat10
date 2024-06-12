const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/**/*.feature",
    async setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        console.log(launchOptions.args);

        if (browser.name === "chrome") {
          launchOptions.args.push("--disable-gpu");
        }

        return launchOptions;
      });

      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    downloadsFolder: "cypress/downloads",
    hideXHRInCommandLog: false,
    trashAssetsBeforeRuns: true,
    chromeWebSecurity: false,
    defaultCommandTimeout: 8000,
    defaultpageLoadTimeout: 8000,
    testIsolation: true,
  },
});
