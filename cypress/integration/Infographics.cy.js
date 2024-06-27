///<reference types="Cypress"/>
import Infographics from "../POM/Infographics_po";

describe("Test for Infographics", () => {
  const infographics = new Infographics();

before(function () {
  cy.visitMainPage();
  cy.login().wait(4000);  
});

beforeEach(function () {
  cy.setupBeforeEach(); // Calling the beforeEach command
});

  it("Admin should redirected to the project dashboard page", () => {
    infographics.project();
  });

  it("Admin should redirect to the add infographic page", () => {
    infographics.settingsInfo();
  });

  it("Admin should be able to add infographic to the project", () => {
    infographics.addinfographics();
  });

  it("Admin should be able to edit infographics", () => {
    infographics.editinfographics();
  });
  
  it("User should be able to view the added infographics", () => {
    infographics.dashboard();
  });

  it("User should be able to off the dashboard view", () => {
    infographics.infographiclist();
  });

  it("User should be able to remove Infographics", () => {
    infographics.deleteinfographic();
  });

});