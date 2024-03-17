///<reference types="Cypress"/>
import ProjectSettings from "../POM/ProjectSettings_po";

describe("Test for project settings page", () => {
  const projectsettings= new ProjectSettings();

before(function () {
  cy.visitMainPage();
  cy.login().wait(5000);  
});

beforeEach(function () {
  // Extract the CSRF token from the cookies and set it as a default header
  cy.getCookie('csrftoken').then((cookie) => {
    Cypress.Cookies.preserveOnce('sessionid', 'csrftoken');
    cy.wrap(cookie.value).as('csrfToken');
  });

  // Add your custom code to skip logout
  Cypress.Cookies.defaults({
    preserve: (cookie) => {
      // Preserve all cookies except the logout related ones
      if (cookie.name === 'logoutCookieName') {
        return false; // Exclude logout cookie
      }
      return true; // Preserve all other cookies
    }
  });
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