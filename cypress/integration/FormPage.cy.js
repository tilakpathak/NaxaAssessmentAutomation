///<reference types="Cypress"/>
import FormPage from "../POM/FormPage_po";

describe("Test for Form page", () => {
    const form = new FormPage();

    before(function () {
        cy.visitMainPage();
        cy.login(); // Log in once before any tests
    });

    beforeEach(function () {
        // Extract the CSRF token from the cookies and set it as a default header
        cy.getCookie('csrftoken').then((cookie) => {
            Cypress.Cookies.preserveOnce('sessionid', 'csrftoken');
            cy.wrap(cookie.value).as('csrfToken')
        });
    });

    it("User should redirect to the form page", () => {
        form.visitFormPage();
    });

    it("Verify the empty form creation", () => {
        form.emptyValidation();
    })

    it("Verify the add form to the system", () => {
        form.addform();
    });

    it("Verify the edit form functionalilty", () => {
        form.editform();
    });

    it("User should able to search the form", () => {
        form.search();
    });

    it("Verify the sorty by date functionality", () => {
        form.SortByDate();
    });
});