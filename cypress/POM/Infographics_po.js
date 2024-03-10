class Infographics {

    project() {
        cy.get("[type='search']").clear().type("Household Risk Assessment of Dodhara Chandani Municipality, Kanchanpur").wait(2000);
        cy.get(".is-grow.mb-10.naxatw-relative.pd-15.pm-card").click().wait(5000);
      }

      settingsInfo() {
        cy.get('.pm-dropdown > .is-btn').click().wait(2000);
        cy.get("li:nth-of-type(7) > a").click().wait(4000); // Infographic section inside settings
        // cy.go(-1); //To Go Back from the page 
        return this;
      }

      addinfographics() {
        cy.get(".is-btn.is-btn_icon.is-btn_link > span").click().wait(2000); // click on create button
        cy.get(":nth-child(1) > .pm-select > .pm-select_item").click({force:true}).wait(1500) //click on select form dropdown
        cy.get(".pm-select.pm-select_show > .left-dropdown.pm-select_list > li:nth-of-type(1)").click({force:true}); // select the form 
        // cy.get(".custom-select p").click({ force: true }).wait(3000); // click on the Questiondrop-down field.
        cy.get('.select-list > :nth-child(2)').click({force:true}).wait(3000); // select Question
        cy.get(".naxatw-grow p span").click().wait(2000);
        cy.get('.select-list > :nth-child(3)').click();  // Selecting 'Ethnicity Of Household Head' option from the dropdown
        cy.get(":nth-child(3) > .pm-select > .pm-select_item").click({force:true}); // Click on chart type dropdown.
        cy.get('[data-value="4"]').wait(1500).click({ force: true });
        cy.get("input[name='name']").type("Infographic test");
        cy.get("input[name='description']").type("tHiS iS fOr TesTinG PurPosE")
        cy.get("input[name='order']").type("0").wait(2000);
        cy.get(".naxatw-toggle-label div").click().wait(2000);
        cy.get(".is-btn_primary").click();
        cy.get('.Toastify__toast-container').should('be.visible') // Ensure the toast container is visible
          .contains('Infographics Added successfully.')
          cy.scrollTo('top')
          return this;
      }

      dashboard() {
        cy.get('.dbd-breadcrumb > :nth-child(2) > a').click().wait(4000);
        cy.get('.naxatw-p-6 > h6').scrollIntoView().should('be.visible').wait(4000);
        return this;
      }

      infographiclist() {
        cy.get(".dbd-togglecntr").scrollTo('top')
        cy.get('.pm-dropdown > .is-btn').click().wait(2000); // click on settings
        cy.get("li:nth-of-type(7) > a").click().wait(2000); // Infographic section inside settings
        cy.get('.pm-control').type("Infographic test"); // type infogrpahic name in search 
        cy.get(".false.is-circle > .material-icons").click().scrollIntoView().wait(2000) // click on three dots
        cy.get(".mt-1.pm-dropdown_menu > li:nth-of-type(1) > a").click().wait(2000) //click on edit button
        cy.get('.naxatw-toggle').click({force:true}).wait(2000) // click on toggle button
        cy.get('.common-button').click() // click on save button
        cy.get(".Toastify__toast-body").should('have.text', "Infographics updated successfully.")
        cy.get('.dbd-breadcrumb > :nth-child(2) > a').click().wait(4000); 
        cy.get(".dbd-togglecntr").scrollTo('bottom').wait(4000)
        cy.get('.naxatw-gap-x-2 > [type="button"]').click() //click on infogrpahic from the project dashboard
        cy.get('.pm-control').type("Infographic test").wait(5000).clear();
        cy.get('.pm-select_item').click().wait(3000); //click on selet ward dropdown
        cy.get(".left-dropdown.pm-select_list > li:nth-of-type(1)").click().wait(5000);
        return this;
      }

      
      deleteinfographic() {
        cy.go(-1)
        cy.get('.pm-dropdown > .is-btn').click().wait(2000); // click on settings
        cy.get("li:nth-of-type(7) > a").click().wait(2000); // Infographic section inside settings
        cy.get('.pm-control').type("Infographic test"); // type infogrpahic name in search 
        cy.get(".false.is-circle > .material-icons").click().scrollIntoView().wait(2000) // click on three dots
        cy.get(".mt-1.pm-dropdown_menu > li:nth-of-type(2) > a").click().wait(4000) //click on delete button
        cy.get('.is-btn.is-btn_red').click() // click on confirm delete button
        cy.get('.dbd-breadcrumb > :nth-child(2) > a').click().wait(4000); 
        cy.get(".dbd-togglecntr").scrollTo('bottom').wait(4000)
        cy.get('.naxatw-gap-x-2 > [type="button"]').click() //click on infogrpahic from the project dashboard
        cy.get('.pm-control').type("Infographic test").wait(5000);
        return this;
      }
    
    
}

export default Infographics;
