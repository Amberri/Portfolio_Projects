const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //specPattern: ["**/*.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"]
  },
  env: {
    baseCarSearchUrl: "http://qalab.pl.tivixlabs.com/",     
    carDetailUrl: "http://qalab.pl.tivixlabs.com/details/4",
    carRentUrl: "http://qalab.pl.tivixlabs.com/rent/4"    
  },
  
  pageLoadTimeout: 10000,
  defaultCommandTimeout: 10000,
  fixturesFolder: "cypress/fixtures",
  chromeWebSecurity: false, 
  viewportWidth: 1300,
  viewportHeight: 1400, 
  modifyObstructiveCode:false, 
  failOnStatusCode: false,
});
