import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import loginPage from "../../../Pages/login/loginPage";


Given('I am on the login page', () => {
    loginPage.openURL()
})

When('I login as {string} with password {string}', (username, password) => {
    loginPage.enterUsername(username)
    loginPage.enterPassword(password)
})

And('I click on the login button', () => {
    loginPage.clickLoginButton()
})

Then('I should be redirected to the inventory page', () => {
    cy.verifyURL('/inventory.html')
})


Then('I should see error message {string}', (errorMessage) => {
    loginPage.verifyErrorMessage(errorMessage)
})

And('I should remain on the login page', () => {
    cy.url().should('include', 'v1')
    // cy.verifyURL('v1/index.html')
})

When('I enter username {string}', (username) => {
    loginPage.enterUsername(username)

})
And('I enter password {string}', (password) => {
    loginPage.enterPassword(password)
})