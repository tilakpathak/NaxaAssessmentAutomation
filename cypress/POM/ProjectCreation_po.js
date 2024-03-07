import { faker } from "@faker-js/faker";

class ProjectCreation {

  addproject() {
    const data = {
      Name: faker.random.alpha(5),
      cityName: faker.address.cityName(),
      startdate: faker.date.past(4).toISOString().split('T')[0], // Format date as 'YYYY-MM-DD'
      enddate: faker.date.future(5).toISOString().split('T')[0], // Format date as 'YYYY-MM-DD'
      phone: faker.phone.number('98########'),
      email: faker.internet.email(),
      description: faker.lorem.sentence(5)
    };

    // Fill form fields with random data
    cy.get(".is-btn > .fw-500").click().wait(2000); // Add button
    cy.get(".dbd-header .pm-modal_body > .pm-group:nth-of-type(1) .pm-control").clear().type(data.Name);
    // Click to open the dropdown
    cy.get('.pm-select_item').click();
    // Select a random option
    const randomIndex = Math.floor(Math.random() * 3) + 1; // Generating a random index from 1 to 3
    cy.get(`.pm-select_show .pm-select_list > :nth-child(${randomIndex})`).click().wait(1500);
    //city and all other fields
    cy.get(".dbd-header .pm-group:nth-of-type(3) .pm-control").clear().type(data.cityName).wait(2000);
    cy.xpath("/html//div[@id='create-project']/form[@class='pm-modal_cntr']/div[@class='pm-modal_body scrollbar']/div[4]/div[1]//input").type(data.startdate).wait(1500);
    cy.xpath("/html//div[@id='create-project']/form[@class='pm-modal_cntr']/div[@class='pm-modal_body scrollbar']/div[4]/div[2]/div//input").type(data.enddate).wait(1500);
    cy.get("input[name='phone']").clear().type(data.phone);
    cy.get("input[name='email']").clear().type(data.email);
    cy.get(".dbd-header .pm-group:nth-of-type(7) .pm-control").type(data.description).wait(1000);
    cy.get(".dbd-header #create-project .is-btn_primary").click() //Save button
    cy.get("div[role='alert'] > div:nth-of-type(2)").should("have.text", "Project added successfully") //Assertion project added 
    return data; // Return the generated data for potential further use
  }
}

export default ProjectCreation;
