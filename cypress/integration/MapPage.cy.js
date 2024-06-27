///<reference types="Cypress"/>
import MapPage from "../POM/MapPage_po";

describe("Test for Map page", () => {
  const mappage = new MapPage();

  before(function () {
    cy.visitMainPage();
    cy.login().wait(4000);
  });

  beforeEach(function () {
    cy.setupBeforeEach(); // Calling the beforeEach command
  });

  it("Admin should redirect to project details page", () => {
    mappage.project();
  });

  it("Admin should redirect to Map page", () => {
    mappage.map();
  });

  it("User should be able to add form to layer", () => {
    mappage.Addlayer();
  });

  it("User should be able to edit layer style", () => {
    mappage.editstyle();
  });

  it("User should be able to edit layer name", () => {
    mappage.editlayername();
  });

  it("User should be able to zoom to layer", () => {
    mappage.zoomtolayer();
  });

  it("User should be able to upload layer", () => {
    mappage.uploadlayer();
  });

  it("User should be able to delete layer", () => {
    mappage.delete();
  });

  it("User should be able to view weather forecast", () => {
    mappage.weather();
  });

  it("User should be able to interact with map elements", () => {
    mappage.mapeicons();
  });

  it("User should be able to search by house & submission", () => {
    mappage.searchbyhouse();
  });

  it("User should be able to view the criteria risk", () => {
    mappage.criteria();
  });

  it("User should be able to Measure the map", () => {
    mappage.tools();
  });

  it("User should be able to download the map", () => {
    mappage.download();
  });

  it("User should be able to draw site on the map", () => {
    mappage.drawsite();
  });

  it("User should be able to remove form", () => {
    mappage.remove();
  });

});