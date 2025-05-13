describe('template spec', () => {
 Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  });

  it('passes', () => {
    cy.viewport(1280, 1080)
    cy.visit('https://gor-pathology.web.app/')
    cy.get('[type="email"]').type('test@kennect.io');
    cy.get('[name="password"]').type('Qwerty@1234');
    cy.get('[class="MuiButton-label"]').contains('Login').click();

    cy.contains('TODO').should('exist')
    cy.contains('Test Cost Calculator').should('exist')

    cy.get('[id="patient-test"]').click();
    cy.contains('Beans').click();
    cy.contains('None').click();
    cy.contains('10%').click();

    cy.contains('250').should('exist')
    cy.contains('225').should('exist')

    cy.contains('Patients').click();
    cy.contains('Add Patient').click();

    cy.get('[name="name"]').type('Varsha');
    cy.get('[name="email"]').type('varshasandeep0207@gmail.com');
    cy.get('[name="phone"]').type('8369996562');
   

    cy.contains('Tests').click();
    cy.contains('Manage Tests').click();
    cy.contains('Add Test').click();

    cy.get('[name="name"]').type('Varsha patil');

    cy.get('[name="amount"]').type('121');
   
  })
})
