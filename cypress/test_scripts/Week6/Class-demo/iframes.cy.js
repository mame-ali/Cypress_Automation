
import 'cypress-iframe';

describe("iframe test suit", () => {

    it ("iframe test case", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        //cy.frameLoaded('#courses-iframe');
        cy.frameLoaded('#courses-iframe');

        cy.iframe().find("a[href*='mentorship']").eq(0).click();

        cy.iframe().find("a[href*='mentorship']").eq(0).should('be.visible')
        cy.iframe().find("a[href*='mentorship']").eq(0).should('have.length',1)
        cy.get('#name').type('Test Successful');

    });
});