///<reference types="Cypress"/>
import UsersPage from "../POM/UsersPage_po";

describe("Test for User page", () => {
    const users = new UsersPage();

    before(function () {
        cy.visitMainPage();
        cy.login(); // Log in once before any tests
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

    // beforeEach(function () {
    //     // Extract the CSRF token from the cookies and set it as a default header
    //     cy.getCookie('csrftoken').then((cookie) => {
    //         Cypress.Cookies.preserveOnce('sessionid', 'csrftoken');
    //         cy.wrap(cookie.value).as('csrfToken')
    //     });
    // });

    it("User should redirect to the user page", () => {
        users.visitUserPage();
    });

    it("Verify the add user to the system", () => {
        users.Adduser();
    });

    it("Verify the user edit functionalilty", () => {
        users.EditUser();
    });
    
    it("Verify the empty user cretaion", () => {
        users.emptyValidation();
    });

    it("Verify the password and confirm password", () => {
        users.PasswordValidation();
    });

    it("Verify the Duplicate usesrname and Email", () => {
        users.DuplicateUser();
    });
    
    it("User should able to search the user", () => {
        users.search();
    });

    it("Verify the user active/inactive functionality", () => {
        users.status();
    });

    it("Verify the sorting functionlity", () => {
        users.SortByName();
    })

    it("Should redirect to the roles page", () => {
        users.Visitrolespage();
    })

});