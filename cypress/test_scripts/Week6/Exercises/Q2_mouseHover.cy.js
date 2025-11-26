
describe("Mouse Hover Handling Test suite", () => {

    beforeEach(() => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    });

    it("Mouse Hover handling Test case", () => {
        cy.get('#mousehover').scrollIntoView();
        
        cy.get('.mouse-hover-content').invoke('show');
        cy.get('.mouse-hover-content a[href="#top"]').should('be.visible')
        cy.contains('Reload').should('be.visible')
    
    });
})