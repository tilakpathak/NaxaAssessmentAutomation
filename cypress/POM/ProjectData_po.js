class ProjectData {
    
    project() {
        cy.get("[type='search']").clear().type("Household Risk Assessment of Dodhara Chandani Municipality, Kanchanpur").wait(2000);
        cy.get(".is-grow.mb-10.naxatw-relative.pd-15.pm-card").click().wait(5000);
        cy.get('.pm-tab > :nth-child(2) > a').click().wait(3000); //click on data from the dashboard 
        return this;
    }

    searchsite() {
        cy.get('.search-wrap > .pm-control').type("CD-W-9-D-123").wait(5000).clear(); //type on the search field.
        // cy.get('.dbd-togglecntr').scrollTo('right')
        cy.get('.container-fluid > .is-between > .is-flex > .is-circle > .material-icons').click().wait(3000) // click on the three dots icon.
        cy.get('.pm-select_item > input').click().scrollIntoView().wait(3000); //click on the region dropdown.
        cy.get('.is-align-center > .pm-select > .pm-select_list > :nth-child(8)').click({force:true}) // select the region from the list.
        cy.get('.is-align-center > .pm-select > .pm-select_list > :nth-child(1)').click({force:true}).wait(3000) // select the region from the list.
        cy.get('[style="cursor: pointer; margin-left: 0.5em;"]').click() //refresh the table.
        cy.get('.dbd-togglecntr > :nth-child(2) > :nth-child(1)').scrollIntoView().wait(3000)
        return this;
    }

    sortby() {
        cy.get('.data_tab1-div > .dbd-body > .container-fluid > .pm-tab_content > .pm-tab-item > .pm-table > .table > thead > :nth-child(1) > :nth-child(1) > .is-flex > .updown-arrow > :nth-child(2)').click().wait(4000)
        cy.get('.data_tab1-div > .dbd-body > .container-fluid > .pm-tab_content > .pm-tab-item > .pm-table > .table > thead > :nth-child(1) > :nth-child(2) > .is-flex > .updown-arrow > :nth-child(2)').click().wait(4000)
        cy.get('.data_tab1-div > .dbd-body > .container-fluid > .pm-tab_content > .pm-tab-item > .pm-table > .table > thead > :nth-child(1) > :nth-child(3) > .is-flex > .updown-arrow > :nth-child(2)').click().wait(4000)
        cy.get('.data_tab1-div > .dbd-body > .container-fluid > .pm-tab_content > .pm-tab-item > .pm-table > .table > thead > :nth-child(1) > :nth-child(5) > .is-flex > .updown-arrow > :nth-child(2)').click().wait(4000)
        cy.get(':nth-child(6) > .is-flex > .updown-arrow > :nth-child(2)').click().wait(4000);
        cy.scrollTo('top').wait(2000)
        return this;
    }

    manageuser() {
        cy.get('.pm-tabcontent > .is-between > .is-flex > .is-btn > a > .clr-primary-500').click().wait(4000); // click on manage user 
        cy.go(-1)
        return this;
    }

    addsecondarydata() {
        cy.get('.pm-card_header > .is-flex > .is-btn > span').click() //click on add create button
        cy.get('.pm-group > input').attachFile("Secondary.png").wait(3000) // upload the file 
        cy.get('[style="display: flex; align-items: center; justify-content: center;"] > .common-button').click().wait(4000) // click on save button
        cy.get('.dbd-togglecntr').scrollTo('right')
        cy.get(':nth-child(5) > .pm-dropdown > .is-circle > .material-icons').click().wait(3000) //click on 3 dots 
        cy.get('.dbd-togglecntr').scrollTo('right')
        // delete this uploaded secondary data
        return this;
    }

    ActiveInactive() {
        cy.get('.pl-15.pm-tab-item').scrollIntoView().wait(2000)
        cy.get(':nth-child(1) > :nth-child(5) > [style="width: 12rem;"] > .switch > .slider').click().wait(1000);
        cy.get(':nth-child(2) > :nth-child(5) > [style="width: 12rem;"] > .switch > .slider').click().wait(1000);
        cy.get(':nth-child(3) > :nth-child(5) > [style="width: 12rem;"] > .switch > .slider').click().wait(1000);
        cy.get(':nth-child(2) > :nth-child(5) > [style="width: 12rem;"] > .switch > .slider').click().wait(1000);
        cy.get(':nth-child(1) > :nth-child(5) > [style="width: 12rem;"] > .switch > .slider').click().wait(1000);
        cy.get(':nth-child(2) > :nth-child(5) > [style="width: 12rem;"] > .switch > .slider').click().wait(1000);
        cy.get(':nth-child(3) > :nth-child(5) > [style="width: 12rem;"] > .switch > .slider').click().wait(1000);
        cy.get(':nth-child(2) > :nth-child(5) > [style="width: 12rem;"] > .switch > .slider').click().wait(1000);
       return this; 
    }

    editdownload() {
        cy.get(':nth-child(2) > :nth-child(6) > .is-flex > .naxatw-relative > .naxatw-inline-flex > .naxatw-items-center > .naxatw-flex > .material-icons').click()
        cy.get(':nth-child(2) > :nth-child(6) > .is-flex > .naxatw-relative > .naxatw-absolute > .naxatw-py-0 > :nth-child(1)').invoke("removeAttr","target").click();
        cy.wait(5000)
        // cy.get(':nth-child(2) > :nth-child(6) > .is-flex > .naxatw-relative > .naxatw-inline-flex > .naxatw-items-center > .naxatw-flex > .material-icons').click()
        // cy.get("[class] tr:nth-of-type(2) [aria-labelledby] [role='presentation']:nth-of-type(2)").click()
        // cy.get("tr:nth-of-type(1) > td:nth-of-type(5) > span[title='download'] > .material-icons").click()
        return this; 
    }

}

export default ProjectData;
