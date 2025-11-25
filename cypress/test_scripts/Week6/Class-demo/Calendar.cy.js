
describe('Calendar Component Tests', () => {

    it('handle calendar test case', () =>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers');
        cy.get('.react-date-picker__inputGroup').should('be.visible').click();
        cy.get('.react-calendar__navigation__label__labelText').should('not.be.NaN').click();
        cy.get(':nth-child(12) > abbr').should('be.visible').click();
        cy.get(':nth-child(31)').should('not.be.NaN').click();
    });

});