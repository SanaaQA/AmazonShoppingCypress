const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
        },
     specPattern : 'cypress/Integration/Examples/*.js' 
  },
  env: { url :"https://www.amazon.in/"} 

});
