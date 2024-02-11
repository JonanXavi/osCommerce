const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  screenshotOnRunFailure: true,
  defaultCommandTimeout: 9000,
  watchForFileChanges: false,
  e2e: {
    baseUrl: 'https://sqademosatp.net/watch/',
  },
});
