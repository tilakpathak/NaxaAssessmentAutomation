class Sitedetails {

    site() {
        cy.get('.search-wrap > .pm-control').type("CD-W-10-A-52") // type in search field 
        cy.get("td:nth-of-type(1) > .naxatw-block.naxatw-h-full.naxatw-px-3.naxatw-py-2.naxatw-w-full").click({ force: true }) // click the searched  element  
        cy.get('.dashboard_tab1-div > .dbd-body > .pm-tab_content > .is-between').scrollIntoView().wait(1500) // scroll to centre
        cy.scrollTo('bottom').wait(3000) // scroll to bottom
        cy.get('.dbd-togglecntr > :nth-child(2)').should('be.visible') // scroll top
        cy.get('.layer-switcher > button').click().scrollIntoView().wait(2000)
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

    }

}
export default Sitedetails;
