///<reference types="Cypress"/>
import FormPage from "../POM/FormPage_po";

describe("Test for Form page", () => {
    const form = new FormPage();

    before(() => {
        // Visit the main page and perform login
        cy.visitMainPage();
        cy.login().wait(4000);
    });

    beforeEach(function () {
        cy.setupBeforeEach(); // Calling the beforeEach command
      });

    it("User should redirect to the form page", () => {
        form.visitFormPage();
    });

    // it("Verify the empty form creation", () => {
    //     form.emptyValidation();
    // });

    it("Verify the add form to the system", () => {
        form.addform();
    });

    // it("Verify the edit form functionality", () => {
    //     form.editform();
    // });

    // it("User should be able to search the form", () => {
    //     form.search();
    // });

    // it("Verify the sort by date functionality", () => {
    //     form.sortByDate();
    // });
});
