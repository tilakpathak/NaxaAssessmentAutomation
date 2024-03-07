///<reference types="Cypress"/>
import MapPage from "../POM/MapPage_po";

describe("Test for Map page", () => {
  const mappage = new MapPage();

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

  it.only("Admin should redirect to project details page", () => {
    mappage.selectproject();
  });

  it("Admin should able to upload the Area", () => {
    mappage.projectarea();
  });

  it("Admin should be able to change the layer-settings", () => {
    mappage.layersettings();
  });

  it("User should be able to add layer", () => {
    mappage.Addlayer();
  });

});