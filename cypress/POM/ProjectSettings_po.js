import { faker } from "@faker-js/faker";

class ProjectSettings {

  selectproject() {
    cy.get("div:nth-of-type(1) > .is-grow.mb-10.naxatw-relative.pd-15.pm-card > a > .is-align-center.is-between.is-flex").click();
    cy.url().should('include', '/?tab=dashboard'); //url assertion
    cy.wait(5000);
    return this;
  }

  settings() {
    cy.get(".false.is-align-center.is-btn.is-btn_icon.is-btn_link.is-flex").click().wait(3000);
    // cy.get(".mt-1.pm-dropdown_menu").contains('Details').click();
    cy.get(".mt-1.pm-dropdown_menu > li:nth-of-type(1) > a").click().wait(3000);
    // cy.go(-1); //To Go Back from the page 
    return this;
  }

  projectarea() {
    cy.get("[class='grid-xl-3 grid-md-4 pl-4'] > [class] > li:nth-child(2) a").click();
    cy.get("input#upload-data").attachFile(["DC-W-10.geojson"]).wait(2000);
    cy.get("button:nth-of-type(2) > .material-icons").click();
    cy.scrollTo('top').wait(5000);
    cy.get("input#upload-data").attachFile(["DC-W-10.geojson"]);
    cy.scrollTo('top').wait(3000);
    cy.get(".pm-select_item > p").click(); // Clicking on the dropdown
    cy.get('[data-value="Name"]').click(); // Select Name from the Dropdown
    cy.get("button[title='Zoom in']").dblclick().wait(2000);
    cy.get("button[title='Zoom out']").dblclick().wait(3000);
    cy.get(".is-btn.is-btn_primary").click(); // Save button
    cy.get("div[role='alert'] > div:nth-of-type(2)").should("have.text", "Successfully Added Project Area.");
    cy.scrollTo('top').wait(4000);
    cy.get(".dbd-breadcrumb.fs-md.fw-md.is-align-center.is-flex.mb-15 > li:nth-of-type(2) > a").click().wait(5000); //click on project name from the top of the setting page
    cy.get(".mt-0.pm-tab.pm-tab_border > li:nth-of-type(3) > a").click().wait(5000); //click on map
    return this;
  }

  users() {
    cy.get(".false.is-align-center.is-btn.is-btn_icon.is-btn_link.is-flex > .ml-05").click().wait(3000); //click on settings
    cy.get(".mt-1.pm-dropdown_menu > li:nth-of-type(3) > a").click().wait(5000) //click on user settings
    cy.get(":nth-child(1) > .is-flex > .pm-select > .pm-select_item > input").click(); //select user namedropdown
    cy.scrollTo('top');
    cy.get('.pm-select_show ul').scrollIntoView({ timeout: 5000, offset: { top: 20, left: 20 } }).contains("tilak7").click().wait(2000); // Adjust timeout and offset values as needed
    // Select role for the user
    cy.get(":nth-child(2) > .is-flex > .pm-select > .pm-select_item > input").click().wait(2000);
    cy.scrollTo('top');
    cy.get(".pm-select_show [data-value='2']").click();
    cy.scrollTo('top');
    // Select Region 
    cy.get(".mb-15.pd-15.pm-card.pm-card_bg.pm-card_border .naxatw-border.naxatw-rounded-md.naxtw-border-gray-700.pm-select_item > input[name='search-Site']").click().wait(2000);
    cy.scrollTo('top');
    cy.get('.mb-15.pd-15.pm-card.pm-card_bg.pm-card_border .left-dropdown.mt-1.pm-select_list > li:nth-of-type(1)').click({ force: true });
    cy.get(".pm-card_footer > .is-btn").click(); // Assign button
    // Assertion for sucessfully assigned user 
    cy.get('.Toastify__toast-container').should('be.visible') // Ensure the toast container is visible
      .contains('Successfully User Assigned.')
    //removing assign user
    cy.get("tbody > tr:last-child") // Selecting the last table row
      .find('.is-circle.is-xs > .material-icons') // Finding the "close" icon within the table row
      .scrollIntoView() // Scroll to the "close" icon
    cy.get(".pm-table_border").scrollTo('topRight') //scroll to top right of table
      .wait(5000); // Wait for 5 seconds
    cy.get("tbody > tr:last-child .is-circle.is-xs > .material-icons").click({force:true}).wait(2000); // removing the user
    cy.get('.Toastify__toast-container').should('be.visible') // Ensure the toast container is visible
      .contains('Successfully User Unassigned.')
      cy.scrollTo('top');
      return this;
  }

  form() {
    cy.get(".pm-tab > :nth-child(4) > a").click().wait(4000); // Form section inside settings
    cy.get('.pm-select_item').click(); // click on the label dropdown
    cy.get(".left-dropdown.pm-select_list > li:nth-of-type(1)").click();
    cy.scrollTo('top').wait(4000);
    cy.get('.pm-select_item').click(); // click on the label dropdown
    cy.get(".left-dropdown.pm-select_list > li:nth-of-type(2)").click();
    cy.scrollTo('top').wait(4000);
    cy.get(".is-flex > :nth-child(1) > span").click().scrollIntoView().wait(2000); //refresh the page  
    cy.get(".search-wrap > .pm-control").type("Multicriteria Analysis to Decide Medical Drone Interventions");
    cy.get("li[role='tab'] > .fw-600.mb-05").click().wait(2000) //click on the search form
    cy.get(".btnClassName.false.is-btn.is-btn_icon.is-btn_primary").click(); //save button
    cy.get('.Toastify__toast-body').should("have.text", "Successfully Form Assigned to Project."); // assertion for assigned form to the project
    cy.scrollTo('top').wait(4000);
    return this;
  }

  infographics() {
    cy.get(".pm-tab > :nth-child(8) > a").click().wait(4000); // Infographic section inside settings
    cy.get(".is-btn.is-btn_icon.is-btn_link > span").click().wait(2000); // click on create button
    cy.get(":nth-child(1) > .pm-select > .pm-select_item").click().wait(1500) //click on select form dropdown
    cy.get(".pm-select.pm-select_show > .left-dropdown.pm-select_list > li:nth-of-type(1)").click(); // select the form 
    cy.get(".custom-select p").click({ force: true }).wait(3000); // click on the Questiondrop-down field.
    cy.get(".select-list > :first-child").click(); // select Question
    cy.get(":nth-child(3) > .pm-select > .pm-select_item").click(); // Click on chart type dropdown.
    cy.get(".left-dropdown.pm-select_list > li:nth-of-type(4)").wait(1500).click({ force: true });
    cy.get("input[name='name']").type("infographic test");
    cy.get("input[name='description']").type("tHiS iS fOr TesTinG PurPosE")
    cy.get("input[name='order']").type("0").wait(2000);
    cy.get(".naxatw-toggle-label div").click().wait(2000);
    cy.get(".is-btn_primary").click();
    cy.get('.Toastify__toast-container').should('be.visible') // Ensure the toast container is visible
      .contains('Infographics Added successfully.')

    // Edit Infographics 
    cy.wait(5000);
    cy.get('.is-between.is-flex.is-wrap.mb-15').should('be.visible');
    cy.get("tbody tr:nth-of-type(1) div .material-icons").click(); //clicking the 3 dots 
    cy.get(".mt-1.pm-dropdown_menu > li:nth-of-type(1) > a").click().wait(3000); //clicking the edit 
    cy.get(":nth-child(2) > .pm-group > .naxatw-space-y-2 > .pm-control").clear().type("Naxa_Infographics").wait(3000);
    cy.get(".common-button.is-btn.is-btn_primary").click();
    cy.scrollTo('top');
    cy.get('.Toastify__toast-container').should('be.visible') // Ensure the toast container is visible
      .contains('Infographics updated successfully.')

    //Remove Infographics
    cy.wait(5000);
    cy.get('.is-between.is-flex.is-wrap.mb-15').should('be.visible');
    cy.get("tbody tr:nth-of-type(1) div .material-icons").click(); //clicking the 3 dots 
    cy.get(".mt-1.pm-dropdown_menu > li:nth-of-type(2) > a").click().wait(3000); //clicking the delete 
    cy.get(".is-btn.is-btn_red").click();
    cy.scrollTo('top');
    return this;
  }

  siteformdetails() {
    cy.wait(3000);
    cy.get("li:nth-of-type(12) > a").click().wait(2000) // click on site submission details inside settings
    cy.get(".is-btn.is-btn_icon.is-btn_link > span").click(); //click on create new button
    cy.get(":nth-child(1) > .pm-select > .pm-select_item").click().wait(2000); //click on dropdown
    cy.get(".left-dropdown.pm-select_list > li:nth-of-type(2)").click(); //select table
    cy.get(":nth-child(2) > .pm-select > .pm-select_item").click().wait(2000); // click on form dropdown
    cy.get(".pm-select.pm-select_show > .left-dropdown.pm-select_list > li[role='tab']").click(); //select the form
    cy.get("p > span").click({force:true}).wait(2000); //click on question dropdon
    cy.get("li:nth-of-type(1) > span").click({force:true});
    cy.get("input[name='name']").type("Health");
    cy.get("input[name='order']").type("0").wait(2000);
    cy.get('.common-button').click({force:true});
    cy.scrollTo('top');
    cy.get('.Toastify__toast-container').should('be.visible') // Ensure the toast container is visible
      .contains('Data Saved Successfully.')

    //edit the site information details
    cy.wait(2000)
    cy.get("tbody tr:nth-of-type(1) div .material-icons").click();
    cy.get(".mt-1.pm-dropdown_menu > li:nth-of-type(1) > a").click().wait(2000);
    cy.get("input[name='name']").type("_test").wait(2000);
    cy.get(".common-button.is-btn.is-btn_primary").click()
    cy.scrollTo('top');
    cy.get('.Toastify__toast-container').should('be.visible') // Ensure the toast container is visible
      .contains('Data updated successfully.')

    // remove the site information details
    cy.wait(2000);
    cy.get("tbody tr:nth-of-type(1) div .material-icons").click();
    cy.get(".mt-1.pm-dropdown_menu > li:nth-of-type(2) > a").click().wait(2000);
    cy.get(".is-btn.is-btn_red").click({force: true});
    cy.scrollTo('top');
    return this;
  }

  layersettings() {
    cy.wait(4000);
    cy.get(".dbd-breadcrumb.fs-md.fw-md.is-align-center.is-flex.mb-15 > li:nth-of-type(2) > a").click().wait(3000); //click on project name from the top of the setting page
    cy.get(".mt-0.pm-tab.pm-tab_border > li:nth-of-type(3) > a").click().wait(5000); //click on map
    cy.get(".false.is-align-center.is-btn.is-btn_icon.is-btn_link.is-flex > .ml-05").click(); //click on settings
    cy.get("li:nth-of-type(13) > a").click() //click on layer settinggs
    cy.get("div:nth-of-type(1) > .naxatw-flex.naxatw-item-center.naxatw-justify-end  .round.slider").click(); //click on status 
    cy.get("div:nth-of-type(2) > .naxatw-flex.naxatw-item-center.naxatw-justify-end  .round.slider").click(); //click on status 
    cy.get("div:nth-of-type(3) > .naxatw-flex.naxatw-item-center.naxatw-justify-end  .round.slider").click(); //click on status 
    cy.go(-1); // back to the map page 
    cy.get(".container-fluid > .mt-0.pm-tab.pm-tab_border > li:nth-of-type(2) > a").click({force:true}); //click on data logic 
    cy.get(".container-fluid > .mt-0.pm-tab.pm-tab_border > li:nth-of-type(3) > a").click({force:true}).wait(5000); //click on map
    return this;
  }

}

export default ProjectSettings;
