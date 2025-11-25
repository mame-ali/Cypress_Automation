
describe('Fixture Test Suite', () => {

    beforeEach(function() {
        //load data from fixture file
        cy.visit('https://evangadi.com/login');
        cy.fixture('login').as('testData');
    });
    it('Fixture Test Case with beforeEach with Alias', function() {
        //load data from fixture file
        cy.get(':nth-child(1) > div > ._input__container_i8yxx_1 > ._input_i8yxx_1').type(this.testData.email);
        cy.get(':nth-child(2) > div > ._input__container_i8yxx_1 > ._input_i8yxx_1').type(this.testData.password);
        // cy.get('._button__container_i8yxx_1').click();
            
    });

    it('Fixture Test Case', function() {
        //load data from fixture file
        cy.fixture('login').then((userData)=> {
            cy.visit('https://evangadi.com/login');
        cy.get(':nth-child(1) > div > ._input__container_i8yxx_1 > ._input_i8yxx_1').type(userData.email);
        cy.get(':nth-child(2) > div > ._input__container_i8yxx_1 > ._input_i8yxx_1').type(userData.password);
        // cy.get('._button__container_i8yxx_1').click();
            
        })
        
        
    });

   
});