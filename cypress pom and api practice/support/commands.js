// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//2. E2E Test Konusunda Yapılan Pratik
Cypress.Commands.add('login', (email, password) =>{
    cy.visit("https://www.edu.goit.global/account/login")
    cy.get('[name="email"]').type(email)
    cy.get('[name="password"]').type(password)
    cy.get('.eckniwg2').click()
})


//2. Modül ödevinin pratiği
Cypress.Commands.add('homlogin', (email, password) =>{
cy.visit("https://www.edu.goit.global/account/login")
cy.get('[name="email"]').type(email)
cy.get('[name="password"]').type(password)
cy.get('.eckniwg2').click()
cy.wait(5000)
cy.get('#open-navigation-menu-mobile').click()
cy.contains('div', 'Log out').should('be.visible').click()
})



