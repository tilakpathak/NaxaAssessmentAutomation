///<reference types="Cypress"/>
import SiteDetails from "../POM/SiteDetails_po";

describe("Test for site forms details", () => {
  const sitedetails = new SiteDetails();

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
    sitedetails.project();
  });

  it("Admin should be able to search and filter the site", () => {
    sitedetailse.searchsite();
  });

  it("User should redirect to the site details page", () => {
    sitedetails.sitedetails();
  })  

});