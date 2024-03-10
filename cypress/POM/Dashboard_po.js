class Dashboard {
   
    Logo() { //cy.get("a > .is-flex > img").realHover();  
        cy.get("a > .is-flex > img").click({ force: true }).wait(2000);
        cy.get(".how-it-works > .cover > .title").scrollIntoView().should('be.visible');
        cy.get('.header [class="material-icons"]').click().wait(1000);  
        cy.get('ul.naxatw-text-primary-600 > li:nth-child(1) > a').click({ multiple: true, force: true });
        return this;
    }

    ProjectPage() {
        cy.url().should('include', '/projects'); // Assertion 
        return this;
    }

    UserPage() {
        cy.get("[class] li:nth-of-type(2) [xmlns]").click().wait(3000);
        cy.url().should('include', '/users'); // Assertion
        return this; 
    }

    FormPage() {
        cy.get("li:nth-of-type(3) > a > .menu-list_icon > svg").click().wait(3000);
        cy.url().should('include', '/forms'); // Assertion  
        return this;
    }

    Logout() {
        cy.get('.pf-img > img').click().wait(2000);
        cy.get('.material-icons.more_vert').click().wait(1000);
        cy.get(".login_dropdown.mr-15.pm-dropdown_menu  a").click();
        cy.get(".Toastify__toast-body > :nth-child(2)").should("have.text" ,"You logged out successfully.")
        return this;

  }

}

export default Dashboard;