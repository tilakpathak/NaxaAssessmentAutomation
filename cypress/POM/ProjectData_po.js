class ProjectData {

    project() {
        cy.get("[type='search']").clear().type("Household Risk Assessment of Dodhara Chandani Municipality, Kanchanpur").wait(2000);
        cy.get(".is-grow.mb-10.naxatw-relative.pd-15.pm-card").click().wait(5000);
        cy.get('.pm-tab > :nth-child(2) > a').click().wait(3000); //click on data from the dashboard 
        return this;
    }

    editremove() {
        cy.get(':nth-child(1) > :nth-child(7) > .naxatw-block > .is-flex > .pm-dropdown > .is-circle > .material-icons').click({force:true}).wait(3000) //click on three dots 
        cy.get('.naxatw-block > .is-flex > .pm-dropdown > .pm-dropdown_menu > :nth-child(1) > a').click() //click on edit 
        cy.get("input[name='name']").clear().type("CD-W-9-D-TEST").wait(3000) //type name
        cy.get('.pm-modal_show > .pm-modal_cntr > .pm-modal_footer > .common-button').click({force:true}); //click on save button 
        cy.get("div[role='alert'] > div:nth-of-type(2)").should('have.text', 'Site Updated Successfully') // assertion message 
        cy.scrollTo('top')
        cy.get(':nth-child(1) > :nth-child(7) > .naxatw-block > .is-flex > .pm-dropdown > .is-circle > .material-icons').click({force:true}).wait(3000) //click on three dots 
        cy.get('.naxatw-block > .is-flex > .pm-dropdown > .pm-dropdown_menu > :nth-child(2) > a').click() //click on remove
        cy.get("#warning-modal .is-btn_red").wait(2000).click({force:true}) // click on confirmation button
        cy.get("div[role='alert'] > div:nth-of-type(2)").should('have.text', 'Successfully Removed Site') // assertion message 
        cy.scrollTo('top')
        return this;
    }

    searchsite() {
        cy.get('.search-wrap > .pm-control').type("CD-W-9-D-123").wait(5000).clear(); //type on the search field.
        // cy.get('.dbd-togglecntr').scrollTo('right')
        cy.get('.container-fluid > .is-between > .is-flex > .is-circle > .material-icons').click().wait(3000) // click on the three dots icon.
        cy.get('.pm-select_item > input').click().scrollIntoView().wait(3000); //click on the region dropdown.
        cy.get('.is-align-center > .pm-select > .pm-select_list > :nth-child(8)').click({ force: true }) // select the region from the list.
        cy.get('.is-align-center > .pm-select > .pm-select_list > :nth-child(1)').click({ force: true }).wait(3000) // select the region from the list.
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

    manageform() {
        cy.get('.pm-tab_content > .is-between > .is-flex > .is-btn > a > .clr-primary-500').click().wait(5000);
        cy.go(-1);
        return this;
    }

    editdownload() {
        cy.get(':nth-child(2) > :nth-child(6) > .is-flex > .naxatw-relative > .naxatw-inline-flex > .naxatw-items-center > .naxatw-flex > .material-icons').click()
        cy.get('li[role="presentation"].naxatw-block').contains('Edit').click({force:true});   
        const url = 'https://assessmenttestkf.naxa.com.np/#/forms/a2Z3jdsNLyUuSY3sp8gTnd/edit/'
        cy.window().then(win => {
            win.location.href = url;
          });
        // cy.get(':nth-child(2) > :nth-child(6) > .is-flex > .naxatw-relative > .naxatw-inline-flex > .naxatw-items-center > .naxatw-flex > .material-icons').click()
        // cy.get("[class] tr:nth-of-type(2) [aria-labelledby] [role='presentation']:nth-of-type(2)").click()
        // cy.get("tr:nth-of-type(1) > td:nth-of-type(5) > span[title='download'] > .material-icons").invoke('removeattr', 'target').click()
        return this;
    }

    clusters() {
        cy.get('.is-between > .pm-tab > :nth-child(2) > a').click().wait(3000);
        cy.scrollTo('bottom').wait(2000)
        cy.scrollTo('top').wait(2000)
        return this; 
    }

}

export default ProjectData;
