class MapPage {

  selectproject() {
    cy.get("div:nth-of-type(1) > .is-grow.mb-10.naxatw-relative.pd-15.pm-card > a > .is-align-center.is-between.is-flex").click();
    cy.url().should('include', '/?tab=dashboard'); //url assertion
    cy.wait(3000);
    cy.get(".false.is-align-center.is-btn.is-btn_icon.is-btn_link.is-flex").click();
    // cy.get(".mt-1.pm-dropdown_menu").contains('Details').click();
    cy.get(".mt-1.pm-dropdown_menu > li:nth-of-type(1) > a").click().wait(2000);
    // cy.go(-1); //To Go Back from the page 
    return this;
  }

  projectarea() {
    cy.get("[class='grid-xl-3 grid-md-4 pl-4'] > [class] > li:nth-child(2) a").click();
    cy.get("input#upload-data").attachFile(["DC-W-10.geojson"]).wait(2000);
    cy.scrollTo('top').wait(2000);
    cy.get(".pm-select_item > p").click(); // Clicking on the dropdown
    cy.get('[data-value="Name"]').click(); // Select Name from the Dropdown
    cy.get("button[title='Zoom in']").dblclick().wait(2000);
    cy.get("button[title='Zoom out']").dblclick().wait(3000);
    cy.get(".is-btn.is-btn_primary").click(); // Save button
    cy.get("div[role='alert'] > div:nth-of-type(2)").should("have.text", "Successfully Added Project Area.").wait(2000);
    cy.scrollTo('top');
    return this;
  }

  layersettings() {
    cy.wait(3000);
    cy.get(".dbd-breadcrumb.fs-md.fw-md.is-align-center.is-flex.mb-15 > li:nth-of-type(2) > a").click().wait(3000); //click on project name from the top of the setting page
    cy.get(".mt-0.pm-tab.pm-tab_border > li:nth-of-type(3) > a").click().wait(5000); //click on map
    cy.get(".false.is-align-center.is-btn.is-btn_icon.is-btn_link.is-flex > .ml-05").click(); //click on settings
    cy.get("li:nth-of-type(13) > a").click() //click on layer settinggs
    cy.get("div:nth-of-type(1) > .naxatw-flex.naxatw-item-center.naxatw-justify-end  .round.slider").click(); //click on status 
    cy.get("div:nth-of-type(2) > .naxatw-flex.naxatw-item-center.naxatw-justify-end  .round.slider").click(); //click on status 
    cy.get("div:nth-of-type(3) > .naxatw-flex.naxatw-item-center.naxatw-justify-end  .round.slider").click(); //click on status 
    cy.go(-1); // back to the map page 
    cy.get(".container-fluid > .mt-0.pm-tab.pm-tab_border > li:nth-of-type(2) > a").click({ force: true }); //click on data logic 
    cy.get(".container-fluid > .mt-0.pm-tab.pm-tab_border > li:nth-of-type(3) > a").click({ force: true }).wait(5000); //click on map
  }

  Addlayer() {
    cy.get("[class='material-icons naxatw-text-white naxatw-text-\[18px\]']").click(); //click on create layer buttton
    cy.get("div:nth-of-type(2) > .btnClassName.false.is-btn.is-btn_icon.is-btn_primary > .fs-md.fw-500").click().wait(2000); //click on select from from
    cy.get(".pm-group > .pm-select > .pm-select_item").click({ force: true }).wait(2000); // click on form dropdown
    cy.get('.pm-group > .pm-select > .pm-select_list > li').click() //select the form
    cy.get('.naxatw-space-y-2 > .pm-control').clear().type("Form-layer").wait(3000)
    cy.get("div:nth-of-type(5) > .pm-modal_cntr .btnClassName.false.is-btn.is-btn_icon.is-btn_primary > .fs-md.fw-500").click().wait(2000); //click on save bubtton
    cy.get(":nth-child(2) > .acc-list > .acc-header").click().wait(2000); //click on expand-xlose icon 
    cy.get(":nth-child(2) > .acc-list > .acc-header").click().wait(2000); //click on sxlose icon
  }
  
}

export default MapPage;
