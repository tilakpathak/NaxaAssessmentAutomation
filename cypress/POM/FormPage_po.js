import { faker } from "@faker-js/faker";

class FormPage {

  visitFormPage() {
    cy.wait(5000);
    cy.get('[class] li:nth-of-type(3) [xmlns]').click(); // Form page; 
    cy.url().should('include', '/forms'); // Assertion 
    cy.wait(4000);
    return this;
  }

  constructor() {
    this.errorSelectors = [".error"];
    this.errorMessages = ["Form Name is Required."];
  }
  
  emptyValidation() {
    cy.get(".btnClassName.false.is-btn.is-btn_icon.is-btn_primary > .fs-md.fw-500").click().wait(2000); // Add button
    cy.get("[class='pm-modal_footer is-border is-flex is-center is-gap-10'] .is-btn_primary").click().wait(2000); // save button 
    this.errorSelectors.forEach((selector, index) => {
      cy.get(selector).should("include.text", this.errorMessages[index]);
    });    
    cy.get(".is-btn.is-btn_secondary").click(); // Cancel button
    return this;
  }

  addform() {
    const data = {
      name: faker.name.jobTitle()
    };
    // Fill form fields with random data
    cy.get(".btnClassName.false.is-btn.is-btn_icon.is-btn_primary > .fs-md.fw-500").click().wait(2000); // Add button
    cy.get("input[name='form_name']").clear().type(data.name);
    cy.get("[class='pm-modal_footer is-border is-flex is-center is-gap-10'] .is-btn_primary").click();
   

// Wait for the new tab to open
cy.wait(1000); // Adjust the wait time as needed

// Get the URL of the new tab
cy.url().then(newTabUrl => {
  // Now you can assert or interact with the content of the new tab
  // For example:
  cy.visit(newTabUrl);
  // Perform assertions or actions on the new tab's content
});
   
    cy.get('.mr-05').then(($element) => {
      const initialValue = parseInt($element.text()); // Get the initial value and parse it as an integer
      const expectedValue = initialValue + 1; // Increase the initial value by one
      cy.get('.mr-05').should('have.text', expectedValue.toString()); // Assert that the element's text is now the expected value
    });

    return data; // Return the generated data for potential further use
  }

  editform() {
    ///////
    ////////
    return this;
  }

  search() {
    cy.get("[type='search']").clear().type("गर्भवती महिला जानकारी संकलन फारम").wait(4000);
    cy.get("[type='search']").clear() //it clear the searched form
  }

  SortByDate() {
    cy.get(":nth-child(4) > .is-flex > .updown-arrow > :nth-child(1)").click({ force: true }).wait(2000); //sorting by name
    cy.get(":nth-child(4) > .is-flex > .updown-arrow > :nth-child(2)").click({ force: true }).wait(2000); //sorting by name
    return this;
  }

}

export default FormPage;
