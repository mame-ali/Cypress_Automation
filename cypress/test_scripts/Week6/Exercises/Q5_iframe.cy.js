import 'cypress-iframe';

describe('Iframe Interaction Test', () => {

    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    });
    it('Interacts with elements inside an iframe', () => {
        // Load the iframe and interact with its contents
        
        cy.get(':nth-child(7) > fieldset > legend').scrollIntoView();
        cy.frameLoaded('#courses-iframe');
        cy.iframe().find("a[href*='mentorship']").eq(0).click();
        cy.iframe().find("a[href*='mentorship']").eq(0).should('be.visible');
        // cy.iframe().find("a[href*='mentorship']").eq(0).should('have.length', 1);
        cy.get('#name').type('HELLO WORLD');
      
    });
});