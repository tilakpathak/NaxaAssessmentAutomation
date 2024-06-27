///<reference types="Cypress"/>
import UsersPage from "../POM/UsersPage_po";

describe("Test for User page", () => {
    const users = new UsersPage();

    before(function () {
        cy.visitMainPage();
        cy.login(); // Log in once before any tests
    });

    beforeEach(function () {
        cy.setupBeforeEach(); // Calling the beforeEach command
    });

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