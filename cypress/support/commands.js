/// <reference types="Cypress" />
import 'cypress-file-upload'
/// <reference types="cypress-xpath" />
import 'cypress-real-events/support';

Cypress.Commands.add("visitMainPage", () => {
  cy.visit(Cypress.env("baseUrl"));
});

Cypress.Commands.add("login", () => {
  cy.visit(Cypress.env("baseUrl"));
  cy.request("GET", "https://assessmenttest.naxa.com.np/login")
    .then(response => {
      expect(response.status).to.eq(200);
    })
  const username = Cypress.env("username");
  const password = Cypress.env("password");
  cy.get(".pm-group:nth-of-type(1) .pm-control").clear().type(username);
  cy.get(".custom-input-group .pm-control").clear().type(password);
  cy.get("button").click();

});
