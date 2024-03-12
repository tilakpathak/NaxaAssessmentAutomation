///<reference types="Cypress"/>
import ProjectData from "../POM/ProjectData_po";

describe("Test for site forms details", () => {
  const projectdata = new ProjectData();

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

  it.only("Admin should redirected to the project dashboard page", () => {
    projectdata.project();
  });

  it("Admin should be able to search and filter the site", () => {
    projectdata.searchsite();
  });

  it("User should be able to sort site by name Id and regions", () => {
    projectdata.sortby();
  }); 

  it("Admin should manage user form the project data page", () => {
    projectdata.manageuser();
  });

  // it("Admin should be able to add secondary data and remove data", () => {
  //   projectdata.addsecondarydata();
  // });

  it("Admin should be able to active/inactive form from the list", () => {
    projectdata.ActiveInactive();
  });
  
  it.only("Admin should be able to edit/dopwnload form from the list", () => {
    projectdata.editdownload();
  });

});