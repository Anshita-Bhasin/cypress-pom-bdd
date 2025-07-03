class iframePage {

    selectors = {

        singleIframe: "#singleframe",
        textInput: 'input[type="text"]'
    }

    visitIframePage() {
        cy.visit('https://demo.automationtesting.in/Frames.html')
    }

    enterTextUsingDOM(input) {
        
        cy.get(this.singleIframe)
            .its('0.contentDocument.body')
            .should('not.be.empty')
            .then(cy.wrap)
            .find(this.textInput)
            .clear()
            .type(input)
        return this;


    }

    verifyTextUsingDOM(expectedText) {
        cy.get(this.singleIframe)
            .its('0.contentDocument.body')
            .should('not.be.empty')
            .then(cy.wrap)
            .find(this.textInput)
            .should('have.value', expectedText)
        return this;

    }



}

export default new iframePage();