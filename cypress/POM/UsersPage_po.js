import { faker } from "@faker-js/faker";

class UserPage {

  visitUserPage() {
    cy.wait(5000);
    cy.get("[class] li:nth-of-type(2) [xmlns]").click(); // User page; 
    cy.url().should('include', '/users'); // Assertion 
    cy.wait(4000);
    return this;
  }

  Adduser() {
    const data = {
      userName: faker.internet.userName().toLowerCase(),
      email: faker.internet.email(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      password: faker.internet.password(),
      phone: faker.phone.number('98########'),
      cityName: faker.address.cityName()
    };

    // Fill form fields with random data
    cy.get(".btnClassName.false.is-btn.is-btn_icon.is-btn_primary > .fs-md.fw-500").click().wait(2000); // Add button
    cy.get("input[name='username']").clear().type(data.userName);
    cy.get(".pm-modal_body.scrollbar > div:nth-of-type(1) input[name='email']").clear().type(data.email);
    cy.get(".pm-modal_body.scrollbar > div:nth-of-type(2) input[name='first_name']").clear().type(data.firstName);
    cy.get(".dbd-header .is-between:nth-of-type(2) .pm-group:nth-of-type(2) .pm-control").clear().type(data.lastName).wait(2000);
    cy.get("input[name='password']").clear().type(data.password);
    cy.get("input[name='createpassword']").clear().type(data.password).wait(2000);
    cy.get(".dbd-header .pm-group:nth-of-type(4) .pm-control").clear().type(data.phone);
    // Click to open the dropdown
    cy.get(':nth-child(2) > .pm-modal_cntr > .pm-modal_body > :nth-child(5) > .pm-select').click();

    // Select a random option
    const randomIndex = Math.floor(Math.random() * 3) + 1; // Generating a random index from 1 to 3
    cy.get(`.pm-select_show .pm-select_list > :nth-child(${randomIndex})`).click().wait(1500);

    cy.get(".dbd-header .pm-group:nth-of-type(6) .pm-control").clear().type(data.cityName).wait(2000);

    cy.get(".dbd-header #create-user .is-btn_primary").click() //Save button

    cy.get('.Toastify__toast-body > :nth-child(2)').should("have.text", "User Created Sucessfully") //user created message assertion


    cy.get('.mr-05').then(($element) => {
      const initialValue = parseInt($element.text()); // Get the initial value and parse it as an integer
      const expectedValue = initialValue + 1; // Increase the initial value by one
      cy.get('.mr-05').should('have.text', expectedValue.toString()); // Assert that the element's text is now the expected value
    });

    return data; // Return the generated data for potential further use
  }

  EditUser() {
    const data = {
      email: faker.internet.email(),
    };
    cy.get("[type='search']").clear().type("tilak").wait(1500);
    cy.get('tbody tr:nth-of-type(1) .is-circle.false .material-icons').click(); // Click edit user button
    cy.get(".pm-dropdown.pm-dropdown_option.pm-dropdown_right.pm-dropdown_show > .pm-dropdown_menu  a").click();
    cy.get("tr:nth-of-type(1) > td:nth-of-type(7) > .is-end.is-flex > .false.pm-dropdown.pm-dropdown_right > div#create-user > .pm-modal_cntr > .pm-modal_body.scrollbar input[name='email']").clear().type(data.email);
    cy.get(':nth-child(1) > :nth-child(7) > :nth-child(1) > .pm-dropdown > #create-user > .pm-modal_cntr > .pm-modal_footer > .is-btn_primary').click(); // Click save button
    cy.get(".Toastify__toast-body > :nth-child(2)").should("have.text","Successfully Edited User");
    return data;
  }

  constructor() {
    // constructor logic
    this.errorSelectors = [
      ".dbd-header .is-between:nth-of-type(1) .pm-group:nth-of-type(1) .error",
      ".dbd-header .is-between:nth-of-type(1) .pm-group:nth-of-type(2) .error",
      ".dbd-header .is-between:nth-of-type(2) .error",
      ".dbd-header .is-between:nth-of-type(3) .pm-group:nth-of-type(1) .error",
      ".dbd-header .is-between:nth-of-type(3) .pm-group:nth-of-type(2) .error",
      ".dbd-header .pm-group:nth-of-type(5) .error"
    ];

    this.errorMessages = [
      "Username is Required.",
      "Email is Required.",
      "First Name is Required.",
      "Password is Required.",
      "Confirm Password is Required.",
      "Gender is Required."
    ];
  }

  emptyValidation() {
    cy.get(".btnClassName.false.is-btn.is-btn_icon.is-btn_primary > .fs-md.fw-500").click().wait(2000); // Add button
    cy.get(".dbd-header #create-user .is-btn_primary").click(); // save button 
    cy.get(".dbd-header .is-btn_secondary").click(); // Cancel button
    this.errorSelectors.forEach((selector, index) => {
      cy.get(selector).should("include.text", this.errorMessages[index]);
    });
  }

  PasswordValidation() {
    cy.get(".btnClassName.false.is-btn.is-btn_icon.is-btn_primary > .fs-md.fw-500").click().wait(2000); // Add button
    const password1 = faker.internet.password();
    const password2 = faker.internet.password();

    cy.get("input[name='password']").clear().type(password1);
    cy.get("input[name='createpassword']").clear().type(password2);
    cy.get(".dbd-header #create-user .is-btn_primary").click(); //save button
    cy.get(".dbd-header .is-between:nth-of-type(3) .error").should("be.visible").and("have.text", "Password didnt Match.");
    cy.get(".dbd-header .is-btn_secondary").click(); // Cancel button
    return this;
  }

  DuplicateUser() {
    const data = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      password: faker.internet.password(),
      phone: faker.phone.number('98########'),
    };

    cy.get(".btnClassName.false.is-btn.is-btn_icon.is-btn_primary > .fs-md.fw-500").click().wait(2000); // Add button
    cy.get("input[name='username']").clear().type("tilak7");
    cy.get(".pm-modal_body.scrollbar > div:nth-of-type(1) input[name='email']").clear().type("tilak@mailinator.com");
    cy.get(".pm-modal_body.scrollbar > div:nth-of-type(2) input[name='first_name']").clear().type(data.firstName);
    cy.get(".dbd-header .is-between:nth-of-type(2) .pm-group:nth-of-type(2) .pm-control").clear().type(data.lastName);
    cy.get("input[name='password']").clear().type(data.password);
    cy.get("input[name='createpassword']").clear().type(data.password).wait(2000);
    cy.get(".dbd-header .pm-group:nth-of-type(4) .pm-control").clear().type(data.phone);
    // Click to open the dropdown
    cy.get(':nth-child(2) > .pm-modal_cntr > .pm-modal_body > :nth-child(5) > .pm-select').click();

    // Select a random option
    const randomIndex = Math.floor(Math.random() * 3) + 1; // Generating a random index from 1 to 3
    cy.get(`.pm-select_show .pm-select_list > :nth-child(${randomIndex})`).click().wait(1500);
    cy.get(".dbd-header #create-user .is-btn_primary").click() //Save button
    cy.get('.Toastify__toast-container').should('be.visible') // Ensure the toast container is visible
    .contains('Username:A user with that username already exists.')
  }
  
  search() {
    cy.get("[type='search']").clear().type("test").wait(3000);
    cy.get("[type='search']").clear() //it clear the input name
  }

  status() {
    cy.get("tr:nth-of-type(4) > td:nth-of-type(6) > div > span > .switch > .round.slider").click() // To deactive User
      cy.get(".Toastify__toast-body").should("have.text", "User Deactivated").wait(4000); // Deactive sucessfully message assertion 

    cy.get("tr:nth-of-type(4) > td:nth-of-type(6) > div > span > .switch > .round.slider").click(); // To active user
    cy.get("div[role='alert'] > div:nth-of-type(2)").should("have.text", "User Activated").wait(2000); //Active sucessfully message assertion
  
  }

  SortByName() {
    cy.get("thead th:nth-of-type(2) .updown-arrow .material-icons:nth-of-type(1)").click({ force: true }).wait(2000); //sorting by name
    cy.get("thead th:nth-of-type(2) .updown-arrow .material-icons:nth-of-type(2)").click({ force: true }).wait(2000); //sorting by name
    return this;
  }

  Visitrolespage() {
    cy.get(".container-fluid > .mt-0.pm-tab.pm-tab_border > li:nth-of-type(2) > a").click();
    cy.get("li:nth-of-type(2) > a:nth-of-type(2)").dblclick().wait(2000);
    cy.get(".role-body .is-btn_secondary").click();
    cy.get(".container-fluid > .mt-0.pm-tab.pm-tab_border  .is-active").click();
    return this;
  }

}

export default UserPage;
