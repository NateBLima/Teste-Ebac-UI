const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "nd1w16",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    video: true,
  },
});
