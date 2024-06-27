///<reference types="Cypress"/>
import SiteSubInfo from "../POM/SiteSubInfo_po";

describe("Test for site submission forms details", () => {
  const siteinfo = new SiteSubInfo();

  before(function () {
    cy.visitMainPage();
    cy.login().wait(4000);
  });

  beforeEach(function () {
    cy.setupBeforeEach(); // Calling the beforeEach command
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

  it("Admin should able to edit site information details", () => {
    siteinfo.editsiteinfo();
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

  it("Admin should be able to download the site details", () => {
    siteinfo.download();
  });

});