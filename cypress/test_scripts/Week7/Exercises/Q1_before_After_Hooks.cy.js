describe('Authentication Flow with Hooks', () => {

    // Runs once before all tests
    before(() => {
      cy.visit('https://evangadi.com/auth/login');
    //   cy.get('._input_i8yxx_1  border').type('validuser@example.com');   // replace with real test user
    //   cy.get('input[name="password"]').type('ValidPassword123');     // replace with real test password
    //   cy.get('button[type="submit"]').click();
  
      // Verify login success
    //   cy.url().should('not.include', '/auth/login');
    //   cy.contains('Logout').should('be.visible');
    });
  
    // Runs before each individual test
    beforeEach(() => {
      cy.log('Starting a new test with authenticated session');
    });
  
    it('should access dashboard page', () => {
    //   cy.visit('https://evangadi.com/dashboard'); // protected page
    //   cy.contains('Welcome').should('be.visible');
    });
  
    it('should access profile page', () => {
    //   cy.get('.profile-link').click(); // adjust selector if needed
    //   cy.contains('Profile').should('be.visible');
    });
  
    // Runs after each individual test
    afterEach(() => {
      cy.log('Test finished, session still active');
    });
  
    // Runs once after all tests
    after(() => {
    //   cy.contains('Logout').click();
    //   cy.url().should('include', '/auth/login');
    //   cy.contains('Login').should('be.visible');
    });
  });
  