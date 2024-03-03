///<reference types="Cypress"/>
import LoginPage from "../POM/LoginPage_po";
import { faker } from "@faker-js/faker";

describe("Test for login page", () => {
  const login = new LoginPage();

  before(function () {
    cy.visitMainPage();
  });


  beforeEach(function () {
    // Extract the CSRF token from the cookies and set it as a default header
      cy.getCookie('csrftoken').then((cookie) => {
      Cypress.Cookies.preserveOnce('sessionid', 'csrftoken');
      cy.wrap(cookie.value).as('csrfToken');
    });
  });
 
  const username = faker.internet.email();
  const password = faker.internet.password();

  it("Empty login validation testing", () => {
    login.clickSubmitBtn().VerifyEmptyLogin();
  });

  it("Wrong email and wrong password validation testing", () => {
    login.typeUserName(username).typePassword(password);
    // cy.get(".material-icons").click()
    login.clickSubmitBtn().VerifyInvalidCredentials();
  });

  it("Empty email validation testing", () => {
    cy.get(".pm-group:nth-of-type(1) .pm-control").clear()
    login.typePassword(password);
    login.clickSubmitBtn().VerifyEmptyEmail();
  });

  it("Empty password validation testing", () => {
    login.typeUserName(username);    
    cy.get(".custom-input-group .pm-control").clear();
    login.clickSubmitBtn().VerifyEmptyPassword();
  });

  it("Invalid email validation testing", () => {
    cy.get(".pm-group:nth-of-type(1) .pm-control").clear().type("TilakPathak");
    login.typePassword(password);
    login.clickSubmitBtn().VerifyInvalidEmail();
  });

  it("should validate valid login", () => {
    login.validateValidLogin();
    cy.url().should('include', '/projects'); // First Assertion
    cy.request("GET", "https://assessmenttest.naxa.com.np/login") // Second Assertion 
      .then(response => {
        expect(response.status).to.eq(200);
      });
    cy.wait(5000);
  });   

});