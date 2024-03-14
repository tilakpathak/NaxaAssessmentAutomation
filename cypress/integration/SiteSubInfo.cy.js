///<reference types="Cypress"/>
import SiteSubInfo from "../POM/SiteSubInfo_po";

describe("Test for site submission forms details", () => {
  const siteinfo = new SiteSubInfo();

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
    siteinfo.project();
  });

  it("Admin should redirect to the add site information page", () => {
    siteinfo.settingssiteinfo();
  });

  it("Admin should add site information details to the project", () => {
    siteinfo.addsiteinfo();
  });
  
  it("User should be able to view the site details on dashboard", () => {
    siteinfo.dashboard();
  });

  it("User should be able to filter by time and meter site details", () => {
    siteinfo.timemeter();
  });
  
  it("User should be able to search the site details on dashboard", () => {
    siteinfo.search();
  });

  it("User should be able to select the form for site details", () => {
    siteinfo.formselect();
  });

  it("Admin should be able to remove the site details", () => {
    siteinfo.deletesiteinfo();
  });

});