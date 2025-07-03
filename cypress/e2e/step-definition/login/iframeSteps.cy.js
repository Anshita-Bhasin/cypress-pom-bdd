import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import iframePage from "../../../Pages/login/iframePage";


Given('I navigate to the iframe testing page', () => {

    iframePage.visitIframePage()
})
When('I access the iframe DOM and enter {string}', (input) => {
    iframePage.enterTextUsingDOM(input)

})
Then('the text {string} should be Successfully entered using DOM access', (expectedText) => {
    iframePage.verifyTextUsingDOM(expectedText)

})
