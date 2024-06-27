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
    cy.setupBeforeEach(); // Calling the beforeEach command
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