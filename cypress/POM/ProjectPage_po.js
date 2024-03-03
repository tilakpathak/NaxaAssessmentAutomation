class ProjectPage {

  visitProjectPage() {
    cy.wait(5000);
    cy.get("[class] li:nth-of-type(1) [xmlns]").click(); // project page; 
    cy.url().should('include', '/projects'); // Assertion 
    cy.wait(4000);
    return this;
  }

  constructor() {
    // constructor logic
    this.errorSelectors = [
      ".naxatw-space-y-2 > .error",
      ".false.pm-select > .error",
      "div:nth-of-type(4) > div:nth-of-type(1) > .error",
      "div:nth-of-type(2) > .error"
    ];

    this.errorMessages = [
      "Name is Required.",
      "Organisation is Required.",
      "Start Date is Required",
      "End Date is Required"
    ];
  }

  EmptyValidation() {
    cy.get(".is-btn > .fw-500").click().wait(2000); // Add button
    cy.get(".dbd-header #create-project .is-btn_primary").click().wait(3000); // save button
    cy.get(".dbd-header .is-btn_secondary").click(); // Cancel button
    this.errorSelectors.forEach((selector, index) => {
      cy.get(selector).should("include.text", this.errorMessages[index]);
    });
  }

  EmailValidation() {
    cy.get(".is-btn > .fw-500").click().wait(2000); // Add button
    const email = "test" + Math.floor(Math.random() * 1000) + "Tilak";
    cy.get("input[name='email']").clear().type(email).wait(1500);
    // cy.get(".is-btn > .fw-500").click().wait(2000); // Add button
    // cy.get("input[name='email']").type("Tilak Pathak").wait(2000); // Enter Invalid email
    cy.get(".dbd-header #create-project .is-btn_primary").click().wait(3000); // save button
    cy.get(".dbd-header .is-btn_secondary").click(); // Cancel button
    cy.get("div:nth-of-type(2) > .naxatw-space-y-2 > .error").should("include.text", "Enter a valid email address")
  }

  DateValidation() {
    cy.get(".is-btn > .fw-500").click().wait(2000); // Add button
    // Generate random start date
    const startDate = new Date(+(new Date()) + Math.floor(Math.random() * 10000000000)); // Random date within the next 10000 days
    const formattedStartDate = startDate.toISOString().split('T')[0];
    cy.xpath("/html//div[@id='create-project']/form[@class='pm-modal_cntr']/div[@class='pm-modal_body scrollbar']/div[4]/div[1]//input").clear().type(formattedStartDate).wait(1500);

    // Generate random past date 
    const endDate = new Date(startDate.getTime() - Math.floor(Math.random() * 10000000000)); // Random date within the last 10000 days
    const formattedEndDate = endDate.toISOString().split('T')[0];
    cy.xpath("/html//div[@id='create-project']/form[@class='pm-modal_cntr']/div[@class='pm-modal_body scrollbar']/div[4]/div[2]/div//input").clear().type(formattedEndDate).wait(1500);
    cy.get(".dbd-header #create-project .is-btn_primary").click().wait(3000); // save button
    cy.get("div:nth-of-type(2) > .error").should("have.text", "End date cannot be before start date");
    cy.get(".dbd-header .is-btn_secondary").click(); // Cancel button
  }

  
  generateRandomWord(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Generate random word logic
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  AddProject() {
    cy.get(".is-btn > .fw-500").click().wait(1000); // Add Button  
    // Generate random project name
    const projectName = "TestProject" + Math.floor(Math.random() * 10);
    cy.get('.dbd-header .pm-modal_body > .pm-group:nth-of-type(1) .pm-control').type(projectName).wait(1500);

    // Click to open the dropdown
    cy.get('.pm-select_item').click();

    // Select a random option
    const randomIndex = Math.floor(Math.random() * 3) + 1; // Generating a random index from 1 to 3
    cy.get(`.left-dropdown.pm-select_list > li:nth-of-type(${randomIndex})`).click().wait(1500);

    // Random Address and Adjust the length of the word as needed
    const address = " " + this.generateRandomWord(5);
    cy.get('.dbd-header .pm-group:nth-of-type(3) .pm-control').type(address).wait(1500);

    // Generate random start date
    const startDate = new Date(+(new Date()) - Math.floor(Math.random() * 10000000000)); // Random date within the last 10000 days
    const formattedStartDate = startDate.toISOString().split('T')[0];
    cy.xpath("/html//div[@id='create-project']/form[@class='pm-modal_cntr']/div[@class='pm-modal_body scrollbar']/div[4]/div[1]//input").clear().type(formattedStartDate).wait(1500);

    // Generate random end date greater than start date
    const endDate = new Date(startDate.getTime() + Math.floor(Math.random() * 10000000000)); // Random date within the next 10000 days
    const formattedEndDate = endDate.toISOString().split('T')[0];
    cy.xpath("/html//div[@id='create-project']/form[@class='pm-modal_cntr']/div[@class='pm-modal_body scrollbar']/div[4]/div[2]/div//input").clear().type(formattedEndDate).wait(1500);

    // Generate random phone number
    const phoneNumber = Math.floor(Math.random() * 10000000000).toString().padStart(10, '0'); // 10-digit random number
    cy.get("input[name='phone']").type(phoneNumber).wait(1500);

    // Generate random email
    const email = "test" + Math.floor(Math.random() * 1000) + "@mailinator.com";
    cy.get("input[name='email']").type(email).wait(1500);

    cy.get(".dbd-header #create-project .is-btn_primary").click(); //save button

    cy.get("div[role='alert'] > div:nth-of-type(2)").should("have.text", "Project added successfully") //Assertion project added 

    // Total project Count Assertions
    cy.get('.mr-05').then(($element) => {
      const initialValue = parseInt($element.text()); // Get the initial value and parse it as an integer
      const expectedValue = initialValue + 1; // Increase the initial value by one
      cy.get('.mr-05').should('have.text', expectedValue.toString()); // Assert that the element's text is now the expected value
    });

    cy.get("[type='search']").type(projectName).wait(4000); // it search the added project 
    cy.get(".naxatw-mr-2 > .material-icons").click(); // close the search item

  }

  EditProject() {
    cy.get("div:first-child > .pm-card span[title='Options']").click().wait(1000);
    cy.get('[href$="?tab=dashboard"] > .is-between > :nth-child(2) > .naxatw-relative > .naxatw-absolute > .naxatw-py-0 > :nth-child(1)').first().click(); // first item from the list to edit Button
    const PName = "TestNaxa" + Math.floor(Math.random() * 10);
    cy.get("main > div#create-project > .pm-modal_cntr > .pm-modal_body.scrollbar > form input[name='name']").clear().type(PName).wait(1500);
    cy.get("main > div#create-project > .pm-modal_cntr  .common-button.is-btn.is-btn_primary").click({ force: true }).wait(5000); //save button
  }

  DeleteProject() {
    cy.get("div:first-child > .pm-card span[title='Options']").click().wait(1000);
    cy.get('[href$="?tab=dashboard"] > .is-between > :nth-child(2) > .naxatw-relative > .naxatw-absolute > .naxatw-py-0 > :nth-child(2)').first().click(); // first item from the list to delete    
    cy.scrollTo("top");
    cy.get(":nth-child(1) > .pm-card > #warning-modal > .pm-modal_cntr > .pm-modal_footer > .is-btn_red").wait(1000).click();
    cy.get("div[role='alert'] > div:nth-of-type(2)").should("have.text", "Project deleted successfully") //Assertion project deleted 
    cy.get('.mr-05').then(($element) => {
      const initialValue = parseInt($element.text()); // Get the initial value and parse it as an integer
      const expectedValue = initialValue - 1; // Decrease the initial value by one
      cy.get('.mr-05').should('have.text', expectedValue.toString()); // Assert that the element's text is now the expected value
    });
  }

  SearchProject() {
    cy.get("[type='search']").clear().type("Gsma").wait(4000);
    cy.get(".naxatw-mr-2 > .material-icons").click().wait(2000);
  }

}

export default ProjectPage;
