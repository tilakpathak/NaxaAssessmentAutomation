///<reference types="Cypress"/>
import Infographics from "../POM/Infographics_po";

describe("Test for Infographics", () => {
  const infographics = new Infographics();

before(function () {
  cy.visitMainPage();
  cy.login().wait(4000);  
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

  it("Admin should redirected to the project dashboard page", () => {
    infographics.project();
  });

  it("Admin should redirect to the add infographic page", () => {
    infographics.settingsInfo();
  });

  it("Admin should add infographic to the project", () => {
    infographics.addinfographics();
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