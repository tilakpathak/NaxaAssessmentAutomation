///<reference types="Cypress"/>
import ProjectSettings from "../POM/ProjectSettings_po";

describe("Test for project settings page", () => {
  const projectsettings = new ProjectSettings();

  before(function () {
    cy.visitMainPage();
    cy.login().wait(5000);
  });

  beforeEach(function () {
    cy.setupBeforeEach(); // Calling the beforeEach command
  });

  it("Admin should redirect to project details page", () => {
    projectsettings.selectproject();
  });

  it("Admin should able to click on settings", () => {
    projectsettings.settings();
  });

  it("Admin should able to upload the Area", () => {
    projectsettings.projectarea();
  });

  it("Admin should be able to assign the user", () => {
    projectsettings.users();
  });

  it("Admin should be able to assign the from", () => {
    projectsettings.form();
  });

  it("Admin should be able to change the layer-settings", () => {
    projectsettings.layersettings();
  });

});