const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "ea5t7q",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    video: true,
  },
});
