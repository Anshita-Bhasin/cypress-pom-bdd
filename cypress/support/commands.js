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


Cypress.Commands.add('visitLoginPage', () => {
    cy.visit('/')
})

Cypress.Commands.add('getElementByText', (text) => {
    return cy.contains(text)
})

Cypress.Commands.add('clickElement', (selector) => {
    return cy.get(selector).should('be.visible').click()
})

Cypress.Commands.add('typeText', (selector, text) => {
    if (text != '') {
        cy.get(selector).should('be.visible').clear().type(text)
    }
    else {
        cy.get(selector).should('be.visible').clear()
    }
    return this;
})

Cypress.Commands.add('verifyElementExists', (selector) => {
    return cy.get(selector).should('be.exist')
})


Cypress.Commands.add('verifyElementVisible', (selector) => {
    return cy.get(selector).should('be.visible')
})


Cypress.Commands.add('verifyURL', (expectedUrl) => {
    return cy.url().should('include', expectedUrl)
})

Cypress.Commands.add('verifyElementContainsText',(selector,text)=>{
    return cy.get(selector).should('contain.text',text)
})