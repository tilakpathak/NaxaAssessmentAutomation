class Infographics {

    project() {
        cy.get("[type='search']").clear().type("Household Risk Assessment of Dodhara Chandani Municipality, Kanchanpur").wait(2000);
        cy.get(".is-grow.mb-10.naxatw-relative.pd-15.pm-card").click().wait(5000);
        cy.get(".dbd-togglecntr").scrollTo('bottom').wait(4000)
        return this;
    }

    settingssiteinfo() {
        cy.get('.pm-dropdown > .is-btn').click().wait(2000);
        cy.get(".mt-1.pm-dropdown_menu > li:nth-of-type(1) > a").click({force:true});
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

    editsiteinfo() {
            //edit the site information details
    cy.wait(2000)
    cy.get("tbody tr:nth-of-type(1) div .material-icons").click();
    cy.get(".mt-1.pm-dropdown_menu > li:nth-of-type(1) > a").click().wait(2000);
    cy.get("input[name='name']").type("_test").wait(2000);
    cy.get(".common-button.is-btn.is-btn_primary").click()
    cy.scrollTo('top');
    cy.get('.Toastify__toast-container').should('be.visible') // Ensure the toast container is visible
      .contains('Data updated successfully.')

    }

    dashboard() {
        cy.get('.dbd-breadcrumb > :nth-child(2) > a').click().wait(4000)
        cy.get(".dbd-togglecntr").scrollTo('bottom')
        cy.get('.naxatw-flex > .is-flex > .pm-select > .pm-select_item').click({ force: true })
        cy.get('[data-value="96"]').click({ force: true })
        cy.get('[data-value="95"]').dblclick({ force: true }).wait(4000)
        return this;
    }

    timemeter() {
        //filter by time
        cy.get("a[title='Apply filters'] > .material-icons").click({ force: true }).wait(1500); //click onn filter icon
        cy.get(".pm-select_item").eq(2).click({ force: true }).wait(3000) // click on drop down
        cy.get('[data-value="by_time"]').click({ force: true }) //select the option
        cy.get('#from').type("0").wait(3000);
        cy.get('#to').type("5").wait(3000);
        cy.get('.naxatw-justify-center > .is-btn').click({ force: true }) //click on filter button
        cy.get('.pm-tab-item').scrollIntoView().wait(1500) //view the table 
        cy.get(".pm-tab-item.pl-15 thead i.material-icons").eq(0).click({force:true}).wait(4000) //sort
        cy.get(".pm-tab-item.pl-15 thead i.material-icons").eq(1).click({force:true}).wait(4000)

        // Filter by distance
        cy.get("a[title='Apply filters'] > .material-icons").click({ force: true }).wait(1500);
        cy.get(".pm-select_item").eq(2).click({ force: true }).wait(3000)
        cy.get('[data-value="by_distance"]').click({ force: true })
        cy.get('#from').type("1").wait(3000);
        cy.get('#to').type("2").wait(3000);
        cy.get('.naxatw-justify-center > .is-btn').click({ force: true })
        cy.get('.pm-tab-item').scrollIntoView().wait(3000)        
        cy.get(".pm-tab-item.pl-15 thead i.material-icons").eq(2).click({force:true}).wait(4000) //sort
        cy.get(".pm-tab-item.pl-15 thead i.material-icons").eq(3).click({force:true}).wait(4000) //sort
        
        //Filter by both  
        cy.get("a[title='Apply filters'] > .material-icons").click({ force: true }).wait(1500);
        cy.get(".pm-select_item").eq(2).click({ force: true }).wait(3000)
        cy.get('[data-value="both"]').click({ force: true })
        cy.get('.naxatw-flex > #from').eq(0).type("2").wait(3000);
        cy.get('.naxatw-flex > #to').eq(0).type("3");
        cy.get('.naxatw-flex > #from').eq(1).type("5");
        cy.get('.naxatw-flex > #to').eq(1).type("6").wait(3000);
        cy.get('.naxatw-justify-center > .is-btn').click({ force: true })
        cy.get('.pm-tab-item').scrollIntoView().wait(3000)
        cy.get("a[title='Reset filters'] > .material-icons").click().wait(2000);
        return this;
    }

    search() {
        cy.get('.pm-control').type("maya").wait(4000).clear()
        return this;
    }

    formselect() {
        cy.get('.naxatw-flex > .is-flex > .pm-select > .pm-select_item').click({ force: true }).wait(3000)
        cy.get('[data-value="96"]').click({ force: true }).wait(2000)
        cy.get('[data-value="97"]').click({ force: true }).wait(2000)
        cy.get('[data-value="95"]').click({ force: true }).wait(2000)
        return this;
    }

    deletesiteinfo() {
        cy.get(".dbd-togglecntr").scrollTo('top').wait(2000);
        cy.get('.pm-dropdown > .is-btn').click();
        cy.get(".mt-1.pm-dropdown_menu > li:nth-of-type(1) > a").click();
        cy.get("li:nth-of-type(12) > a").click().wait(1500)
        cy.get(".false.is-circle > .material-icons").click().wait(2000)
        cy.get(".mt-1.pm-dropdown_menu > li:nth-of-type(2) > a").click().wait(1500)
        cy.get(".is-btn.is-btn_red").click();
        cy.get('.is-capitalize').scrollIntoView().wait(1500);
        cy.get('.dbd-breadcrumb > :nth-child(2) > a').click().wait(4000)
        cy.get(".dbd-togglecntr").scrollTo('bottom')
        return this;
    }

    download() {
        cy.get("a .naxatw-rounded-lg").eq(1).click()
        const fileNamePattern = '/Form 1\. General Household Information Form - all versions - _xml - \d{4}-\d{2}-\d{2}-\d{2}-\d{2}-\d{2}\.csv/;'
        cy.readFile('cypress/downloads').then(files => {
            const matchingFiles = files.filter(file => fileNamePattern.test(file));
            expect(matchingFiles.length).to.be.greaterThan(0);
        });
        return this;
    }

}

export default Infographics;
