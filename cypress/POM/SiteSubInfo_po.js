class Infographics {

    project() {
        cy.get("[type='search']").clear().type("Household Risk Assessment of Dodhara Chandani Municipality, Kanchanpur").wait(2000);
        cy.get(".is-grow.mb-10.naxatw-relative.pd-15.pm-card").click().wait(5000);
        cy.get(".dbd-togglecntr").scrollTo('bottom').wait(4000)
        return this;
    }

    settingssiteinfo() {
        cy.get('.pm-dropdown > .is-btn').click().wait(2000);
        cy.get(".mt-1.pm-dropdown_menu > li:nth-of-type(1) > a").click();
        cy.get("li:nth-of-type(12) > a").click().wait(2000) // click on site submission details inside settings
        return this;
    }

    addsiteinfo() {
        cy.get(".is-btn.is-btn_icon.is-btn_link > span").click(); //click on create new button
        cy.get(":nth-child(1) > .pm-select > .pm-select_item").click().wait(2000); //click on dropdown
        cy.get('[data-value="2"]').click({ force: true }); //select table
        cy.get(":nth-child(2) > .pm-select > .pm-select_item").click().wait(2000); // click on form dropdown
        cy.get('[data-value="95"]').click(); //select the form
        cy.get(".selected-item").click({ force: true }).wait(2000)
        cy.get('.select-list > :nth-child(3)').click({ force: true })
        cy.get('.naxatw-grow > .form-group > .custom-select > .selected-item').click({ force: true }).wait(2000)
        cy.get('.naxatw-grow > .form-group > .custom-select > .select-list > :nth-child(3)').click({ force: true })
        cy.get("input[name='name']").type("Phone");
        cy.get("input[name='order']").type("0").wait(2000);
        cy.get('.common-button').click({ force: true });
        cy.scrollTo('top');
        cy.get('.Toastify__toast-container').should('be.visible') // Ensure the toast container is visible
            .contains('Data Saved Successfully.')
        return this;
    }

    dashboard() {
        cy.get('.dbd-breadcrumb > :nth-child(2) > a').click().wait(4000)
        cy.get(".dbd-togglecntr").scrollTo('bottom')
        cy.get('.naxatw-flex > .is-flex > .pm-select > .pm-select_item').click({ force: true })
        cy.get('[data-value="96"]').click({ force: true })
        cy.get('[data-value="95"]').dblclick({ force: true }).wait(4000)
        return this;
    }

    search() {
        cy.get('.pm-control').type("maya").wait(4000).clear()
        return this;
    }

    timemeter() {
        cy.get(':nth-child(2) > .is-flex > .filter-icon > .material-icons').click().wait(1500);
        cy.get('input#from').type("0").wait(1500);
        cy.get('input#to').type("5 {enter}").wait(4000);
        cy.get(':nth-child(3) > .is-flex > .filter-icon > .material-icons').click()
        cy.get('input#from').type("5").wait(1500);
        cy.get('input#to').type("10 {enter}").wait(4000);
        return this;
    }

    formselect() {
        cy.get('.naxatw-flex > .is-flex > .pm-select > .pm-select_item').click({ force: true }).wait(3000)
        cy.get('[data-value="96"]').click({ force: true }).wait(2000)
        cy.get('[data-value="97"]').click({ force: true }).wait(2000)
        cy.get('[data-value="98"]').click({ force: true }).wait(2000)
        return this;

    }

    deletesiteinfo(){
        cy.get(".dbd-togglecntr").scrollTo('top').wait(2000);
        cy.get('.pm-dropdown > .is-btn').click();
        cy.get(".mt-1.pm-dropdown_menu > li:nth-of-type(1) > a").click();
        cy.get("li:nth-of-type(12) > a").click().wait(1500)
        cy.get(".false.is-circle > .material-icons").click().wait(2000)
        cy.get(".mt-1.pm-dropdown_menu > li:nth-of-type(2) > a").click().wait(1500)
        cy.get(".is-btn.is-btn_red").click();
        cy.get('.is-capitalize').scrollIntoView().wait(3000);
        return this;
    }

}

export default Infographics;
