const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    baseUrl: "https://www.saucedemo.com/v1/",
    specPattern: 'cypress/e2e/features/**/*.feature',

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      on('file:preprocessor', cucumber())
      on('before:browser:launch', (browser = {}, launchOptions) => {

        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push('--blink-settings=imagesEnabled=false')
          return launchOptions
        }
      })


    },
  },
  // env: {
  //   TAGS: '@smoke'
  // }
});
