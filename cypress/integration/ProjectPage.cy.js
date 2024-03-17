///<reference types="Cypress"/>
import ProjectPage from "../POM/ProjectPage_po";

describe("Test for project page", () => {
  const project = new ProjectPage();

before(function () {
  cy.visitMainPage();
  cy.login();
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

it("User should redirect to the Project page", () => {
  project.visitProjectPage();
});

  it("Verify the empty project cretaion", () => {
    project.EmptyValidation();
  });

  it ("Verify the email validation", () => {
    project.EmailValidation();
  });

  it("Verify the start and end date Validaiton", () => {
    project.DateValidation();
  });
  
  it("Validate the successful project creation", () => {
    project.AddProject();
  });
  
  it("Verify the Edit Functionality", () => {
    project.EditProject();
  });

  it("Verify the project deletion", () => {
    project.DeleteProject();
  });

  it("User should able to search the project", () => {
    project.SearchProject();
  });

});