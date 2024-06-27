///<reference types="Cypress"/>
import Dashboard from "../POM/Dashboard_po";

describe("Test for Dashboard page", () => {
  const dashboard = new Dashboard();
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

  // it("User should redirect to the Landing Page", () => {
  //   dashboard.Logo();
  // });

  it("User should redirect to the Project Page", () => {
    dashboard.ProjectPage();
  });

  it("User should redirected to the user list Page", () => {
    dashboard.UserPage();
  });

  it("User should redirected to the Form list Page", () => {
    dashboard.FormPage();
  });

  it("User should be able to Logout sucessfully", () => {
    dashboard.Logout();
  });

});