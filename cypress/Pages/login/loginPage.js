class loginPage {


    selectors = {

        usernameInput: "#user-name",
        passwordInput: "#password",
        loginButton: "#login-button",
        errorMessage: '[data-test="error1"]'
    }

    openURL() {
        return cy.visit('/')
    }

    enterUsername(username) {
        cy.typeText(this.selectors.usernameInput, username);
        return this;

    }

    enterPassword(password) {
        cy.typeText(this.selectors.passwordInput, password)
        return this;
    }

    clickLoginButton() {
        cy.clickElement(this.selectors.loginButton)
        return this;
    }

    login(username, password) {
        this.enterUsername(username)
            .enterPassword(password)
            .clickLoginButton()
        return this;
    }
    verifyPageVisible() {
        cy.log(" *** Login Successful *** ")
        cy.verifyURL('/inventory.html')
    }

    verifyErrorMessage(expectedMessage) {
        cy.verifyElementVisible(this.selectors.errorMessage)
        cy.verifyElementContainsText(this.selectors.errorMessage, expectedMessage)
    }

}
export default new loginPage();