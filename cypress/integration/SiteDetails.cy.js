///<reference types="Cypress"/>
import SiteDetails from "../POM/SiteDetails_po";

describe("Test for site details and forms", () => {
  const sitedetails = new SiteDetails();

before(function () {
  cy.visitMainPage();
  cy.login().wait(4000); 
});

beforeEach(function () {
  cy.viewport('macbook-13');

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
    sitedetails.searchsite();
  });

  it("User should redirect to the site details page", () => {
    sitedetails.site();
  })  

  it("User should able to search the Assessment's", () => {
    sitedetails.search();
  })  

  it("User should redirect to the submission details", () => {
    sitedetails.assesments();
  })  

  it("User should able to review the submission", () => {
    sitedetails.reviewassessment();
  })  

  it("User should redirect to the house profile page", () => {
    sitedetails.houseprofile();
  })  

});