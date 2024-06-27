import { faker } from "@faker-js/faker";

class FormPage {

  visitFormPage() {
    cy.wait(2000);
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
    cy.get("[class='pm-modal_footer is-border is-flex is-center is-gap-10'] .is-btn_primary").click(); // click on save button 
  
    // Save current URL before navigating to the new URL
    let currentUrl;
    cy.url().then(url => {
      currentUrl = url;
    });
  
    // Extract the ID from the URL
    const url = 'https://assessmenttest.naxa.com.np/forms';
    const id = url.split('/edit/').pop(); // Extract the last part of the URL
  
    // Construct the new URL
    const newUrl = `https://assessmenttestkf.naxa.com.np/#/forms/${id}/edit/`;
  
    // Open the new URL in the same tab
    cy.visit(newUrl);
  
    // Wait for the element to be visible and interact with it
    cy.get('.k-drawer__sidebar > .kobo-button').should('be.visible').wait(2000).click({force:true});
    cy.get('.form-modal__item > :first-child').wait(2000).click({force:true})
    cy.get('#name').type(data.name)
    cy.get('.modal__footer > .kobo-button--blue').wait(2000).click({force:true})
    cy.get('.btn > .k-icon').click({force:true})
    cy.get('.js-cancel-sort').type("Name of the Responder").wait(2000)
    cy.get('.kobo-button').wait(2000).click({force:true})
    cy.get('[data-menu-item="text"] > .k-icon').wait(2000).click({force:true})
    cy.get(".form-builder-header__button--saveneeded").wait(2000).click({force:true})
    cy.get('.left-tooltip').wait(2000).click({force:true})
    cy.get('.form-sidebar__label--Draft').wait(2000).click({force:true})
    cy.get(".form-sidebar__grouping--visible").contains(data.name).click({force:true})
    cy.get('.form-view__cell--buttons > .kobo-button').click({force:true})
    cy.visit(url) 
    cy.login()
    cy.get('[class] li:nth-of-type(3) [xmlns]').click(); // Form page; 
    cy.get('.search-wrap > .pm-control').type(data.name)
  }
  
  

  editform() {
    cy.get('.pm-dropdown > .is-circle > .material-icons').click({force:true})
    cy.get('.')
    return this;
  }

  search() {
    cy.get("[type='search']").clear().type("गर्भवती महिला जानकारी संकलन फारम").wait(4000);
    cy.get("[type='search']").clear() //it clear the searched form
  }

  sortByDate() {
    cy.get(":nth-child(4) > .is-flex > .updown-arrow > :nth-child(1)").click({ force: true }).wait(2000); //sorting by name
    cy.get(":nth-child(4) > .is-flex > .updown-arrow > :nth-child(2)").click({ force: true }).wait(2000); //sorting by name
    return this;
  }

}

export default FormPage;
