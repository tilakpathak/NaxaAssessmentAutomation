Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  import "./commands";
  require('cypress-xpath')
  require('@4tw/cypress-drag-drop');
  require('@faker-js/faker')