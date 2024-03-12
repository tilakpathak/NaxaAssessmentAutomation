///<reference types="Cypress"/>
import FormPage from "../POM/FormPage_po";

describe("Test for Form page", () => {
    const form = new FormPage();

    before(function () {
        cy.visitMainPage();
        cy.login().wait(4000);  
      });
      
      beforeEach(function () {
        // Preserve necessary cookies
        Cypress.Cookies.defaults({
            preserve: (cookie) => {
                // Preserve specific cookies
                if (
                    cookie.name === '_ga' ||
                    cookie.name === '_ga_5VM7YEZGK3' ||
                    cookie.name === '_ga_MZHM60E58P' ||
                    cookie.name === 'csrftoken' ||
                    cookie.name === 'kobonaut'
                ) {
                    return true;
                }
                return false; // Exclude other cookies
            }
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