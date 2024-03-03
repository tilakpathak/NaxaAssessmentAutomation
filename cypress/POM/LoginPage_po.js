class LoginPage {
    typeUserName(username) {
      cy.get(".pm-group:nth-of-type(1) .pm-control").clear().type(username);
      return this;
    }
  
    typePassword(password) {
      cy.get(".custom-input-group .pm-control").clear().type(password);
      return this;
    }
  
    clickSubmitBtn() {
      cy.get(".is-btn_primary").click();
      return this;
    }
  
    VerifyEmptyLogin() {
      cy.get(".Toastify__toast-body").should("have.text", "Username or password is not valid.");
      cy.wait(5000);
      return this;
    }

    VerifyInvalidCredentials() {
      cy.get(".Toastify__toast-body").should("have.text", "Username or password is not valid.");
      cy.wait(5000);
      return this;
    }
  
     VerifyEmptyEmail() {
      cy.get(".Toastify__toast-body").should("have.text", "Username or password is not valid.");
      cy.wait(5000);
      return this;
    }   
  
    VerifyEmptyPassword() {
      cy.get(".Toastify__toast-body").should("have.text", "Username or password is not valid.");
      cy.wait(5000);
    }

    VerifyInvalidEmail() {
      cy.get(".Toastify__toast-body").should("have.text", "Username or password is not valid.");
      cy.wait(5000);
    }
    
    validateValidLogin() {
      cy.login();
      return this;
    }
  } 

  export default LoginPage;