class Sitedetails {

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
        cy.get('.is-align-center > .pm-select > .pm-select_list > :nth-child(8)').click({ force: true }) // select the region from the list.
        cy.get('.is-align-center > .pm-select > .pm-select_list > :nth-child(1)').click({ force: true }).wait(3000) // select the region from the list.
        cy.get('[style="cursor: pointer; margin-left: 0.5em;"]').click() //refresh the table.
        cy.get('.dbd-togglecntr > :nth-child(2) > :nth-child(1)').scrollIntoView().wait(3000)
        return this;
    }

    site() {
        cy.get('.search-wrap > .pm-control').type("CD-W-10-A-52") // type in search field 
        cy.get("td:nth-of-type(1) > .naxatw-block.naxatw-h-full.naxatw-px-3.naxatw-py-2.naxatw-w-full").click({ force: true }) // click the searched  element  
        cy.get('.dashboard_tab1-div > .dbd-body > .pm-tab_content > .is-between').scrollIntoView().wait(1500) // scroll to centre
        cy.scrollTo('bottom').wait(3000) // scroll to bottom
        cy.get('.dbd-togglecntr > :nth-child(2)').should('be.visible') // scroll top
        cy.get('.layer-switcher > button').click({force:true}).scrollIntoView().wait(2000)
        cy.get(':nth-child(3) > label').click() //Osm layer        
        cy.get('canvas').realMouseDown()// click on map
        cy.scrollTo('top').wait(3000) //scroll to top
        cy.get('.layer-switcher > button').click().wait(2000)
        cy.get(':nth-child(4) > label').click() // satelite layer 
        cy.get('canvas').realMouseDown()// click on map
        cy.scrollTo('top').wait(3000) //scroll to top
        cy.get('.ol-zoom-in').dblclick() // click on zoom in 
        cy.scrollTo('top').wait(3000) //scroll to top
        cy.get('.ol-zoom-out').click() // click on zoom out
        cy.scrollTo('top').wait(2000) //scroll to top
        return this;
    }

    search() {
        cy.get('.pm-control').type("Livelihood Information").wait(3500).clear()
        return this;
    }

    assesments() {
        cy.get(':nth-child(2) > :nth-child(2) > .naxatw-block > span').wait(1500).click().wait(5000);
        cy.scrollTo('bottom').wait(3000)
        cy.scrollTo('center').wait(3000)
        cy.scrollTo('top').wait(3000)
        return this;
    }

    reviewassessment() {
        cy.get('#rejected').click()  //click on reject 
        cy.scrollTo('top').wait(1500) // scroll to top and wait 
        cy.get('.status').should("have.text", "Rejected") // Assertion 
        cy.get('#flagged').click() //click on flagged
        cy.scrollTo('top').wait(1500) // scroll to top and wait 
        cy.get('.status').should("have.text", "Flagged") // Assertion
        cy.get('#inprogress').click() //click on In progress
        cy.scrollTo('top').wait(1500) // scroll to top
        cy.get('.is-blue.is-pd.status').should("have.text", "In Progress") // assertion 
        cy.get('#error').click()
        cy.scrollTo('top').wait(1500)
        cy.get('.is-red').should("have.text", "Error")
        cy.get('#approved').click()
        cy.scrollTo('top').wait(1500)
        cy.get('.status').should("have.text", "Approved")
        cy.get('.is-btn').click({ force: true }) //click on save button
        cy.get("div[role='alert'] > div:nth-of-type(2)").should("have.text", "Status updated successfully")
        cy.wait(4000)
        cy.go("back") // redirect to the previous page
        cy.scrollTo('top').wait(2000);
        return this;        
    }

    houseprofile() {
        cy.get('.is-between > .is-flex > .is-btn').click().wait(4000);
        cy.scrollTo('bottom').wait(3000);
        cy.scrollTo('center').wait(3000);
        cy.scrollTo('top').wait(3000);
        cy.get('.is-btn').click({ force: true });
    
        // Get the current date and format it
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are zero-based
        const day = String(today.getDate()).padStart(2, '0');
        const formattedDate = `${day}-${month}-${year}`; // Get the current date in DD-MM-YYYY format
    
        // Construct the downloaded file path
        const filePath = `C:/Users/tilak/OneDrive/Desktop/NaxaAssessmentAutomation/cypress/downloads/hdrpreport-${formattedDate}.pdf`;
        return filePath;
    }
    
}
export default Sitedetails;
