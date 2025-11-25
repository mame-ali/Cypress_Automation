
describe('Advanced Fixture Test Suite', () => {

    beforeEach(function() {
        //load data from fixture file
        cy.fixture('users').as('data');//alias
    });

    it('parameterization test cases', function() {
        cy.visit('https://evangadi.com/login');

        this.data.users.email= "new@gmail.com"

        this.data.users.forEach(element => {
            
            cy.get(':nth-child(1) > div > ._input__container_i8yxx_1 > ._input_i8yxx_1').type(element.email);
                
            cy.get(':nth-child(2) > div > ._input__container_i8yxx_1 > ._input_i8yxx_1').type(element.password);
            cy.wait(2000);
            // cy.get('._button__container_i8yxx_1').click();

        })
        
    
            
    });

    it('overriting fixture', function() {
        
        cy.fixture('login').then((loginData) => {
            this.loginData = loginData;
            loginData.email="admin@gmail.com"

            cy.visit('https://evangadi.com/login');
            cy.get(':nth-child(1) > div > ._input__container_i8yxx_1 > ._input_i8yxx_1').type(loginData.email);
            cy.get(':nth-child(2) > div > ._input__container_i8yxx_1 > ._input_i8yxx_1').type(loginData.password);
        });
        
        // cy.get('._button__container_i8yxx_1').click();
            
    });
});