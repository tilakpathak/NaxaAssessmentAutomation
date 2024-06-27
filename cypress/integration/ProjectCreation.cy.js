///<reference types="Cypress"/>
import ProjectCreation from "../POM/ProjectCreation_po";

describe("Test for project creation", () => {
  const projectcreation = new ProjectCreation();

  before(function () {
    cy.visitMainPage();
    cy.login().wait(4000);
  });

  beforeEach(function () {
    cy.setupBeforeEach(); // Calling the beforeEach command
  });

  it("Validate the successful project creation", () => {
    projectcreation.addproject();
  });

});