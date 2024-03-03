///<reference types="Cypress"/>
import Dashboard from "../POM/Dashboard_po";

describe("Test for login page", () => {
  const dashboard = new Dashboard();

  beforeEach(function () {
    cy.visitMainPage();
    cy.login();
  });


  beforeEach(function () {
        // Extract the CSRF token from the cookies and set it as a default header
      cy.getCookie('csrftoken').then((cookie) => {
      Cypress.Cookies.preserveOnce('sessionid', 'csrftoken');
      cy.wrap(cookie.value).as('csrfToken');
    });
  });

   
   it("User should redirect to the Landing Page", () => {
    dashboard.Logo();
  });

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