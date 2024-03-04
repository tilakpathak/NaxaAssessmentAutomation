import { faker } from "@faker-js/faker";

class ProjectSettings {

  selectproject() {
    cy.get("div:nth-of-type(1) > .is-grow.mb-10.naxatw-relative.pd-15.pm-card > a > .is-align-center.is-between.is-flex").click();
    cy.url().should('include', '/?tab=dashboard'); //url assertion
    cy.wait(3000);
    return this;
  }

  settings() {
    cy.get(".false.is-align-center.is-btn.is-btn_icon.is-btn_link.is-flex").click();
    // cy.get(".mt-1.pm-dropdown_menu").contains('Details').click();
    cy.get(".mt-1.pm-dropdown_menu > li:nth-of-type(1) > a").click().wait(2000);
    // cy.go(-1); //To Go Back from the page 
    return this;
  }

  projectarea() {
    cy.get("[class='grid-xl-3 grid-md-4 pl-4'] > [class] > li:nth-child(2) a").click();
    cy.get("input#upload-data").attachFile(["DC-W-10.geojson"]).wait(2000);
    cy.get("button:nth-of-type(2) > .material-icons").click();
    cy.scrollTo('top').wait(2000);
    cy.get("input#upload-data").attachFile(["DC-W-10.geojson"]);
    cy.get(".pm-select_item > p").click(); // Clicking on the dropdown
    cy.get('[data-value="Name"]').click(); // Select Name from the Dropdown
    cy.get("button[title='Zoom in']").dblclick().wait(2000);
    cy.get("button[title='Zoom out']").dblclick().wait(3000);
    cy.get(".is-btn.is-btn_primary").click(); // Save button
    cy.get("div[role='alert'] > div:nth-of-type(2)").should("have.text", "Successfully Added Project Area.").wait(2000);
    cy.scrollTo('top');
    return this;
  }

  users() {
    cy.get(".pm-tab > :nth-child(3) > a").click(); // User section inside settings
    cy.get(":nth-child(1) > .is-flex > .pm-select > .pm-select_item > input").click(); //select user namedropdown
    cy.scrollTo('top');
    cy.get('.pm-select_show ul').scrollIntoView({ timeout: 2000, offset: { top: 20, left: 20 } }).contains("tilak7").click().wait(2000); // Adjust timeout and offset values as needed
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
    cy.get("tbody > tr:last-child .is-circle.is-xs > .material-icons").scrollIntoView().click().wait(2000); // removing the user
    cy.get('.Toastify__toast-container').should('be.visible') // Ensure the toast container is visible
      .contains('Successfully User Unassigned.')
  }

  form() {
    cy.get(".pm-tab > :nth-child(4) > a").click().wait(4000); // Form section inside settings
    // search the form and clear the searched from
    cy.get(".search-wrap > .pm-control").type("Multicriteria Analysis to Decide Medical Drone Interventions").wait(5000).clear();
    cy.get('.pm-select_item').click(); // click on the label dropdown
    cy.get(".left-dropdown.pm-select_list > li:nth-of-type(1)").click();
    cy.scrollTo('top').wait(4000);
    cy.get('.pm-select_item').click(); // click on the label dropdown
    cy.get(".left-dropdown.pm-select_list > li:nth-of-type(2)").click();
    cy.scrollTo('top').wait(4000);
    cy.get(".is-flex > :nth-child(1) > span").click().scrollIntoView().wait(2000); //refresh the page  
    cy.get("li:nth-of-type(1) > .fw-600.mb-05").click(); //select the first item from the list 
    cy.scrollTo('top').wait(4000);
    cy.get(".btnClassName.false.is-btn.is-btn_icon.is-btn_primary").click(); //save button
    cy.get('.Toastify__toast-body').should("have.text", "Successfully Form Assigned to Project."); // assertion for assigned form to the project
    cy.scrollTo('top').wait(4000);
  }

  infographics() {
    cy.get(".pm-tab > :nth-child(7) > a").click(); // Form section inside settings


  }

}

export default ProjectSettings;
