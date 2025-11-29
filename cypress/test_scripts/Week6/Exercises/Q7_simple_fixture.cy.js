describe('Login Using Fixture Data', () => {

    beforeEach(function() {
      // Load fixture data and alias it
      cy.fixture('rahulLogin').as('loginData');
      cy.visit('https://rahulshettyacademy.com/loginpagePractise/');
    });
  
    it('logs in successfully using fixture alias', function() {
      // Enter username and password from fixture
      cy.get('#username').type(this.loginData.username);
      cy.get('#password').type(this.loginData.password);
//   cy.get('#usertype').check();
      // Select user type (dropdown)
    //   cy.get('.form-control').select(2).should('contain.text','');
    cy.get('select').select("Teacher")
      // Accept terms checkbox
      cy.get('#terms').check().should('be.checked');
  
      // Click login button
    //   cy.get('#signInBtn').click();
  
    //   // Verify successful login by URL and page content
    //   cy.url().should('include', 'angularpractice');
    //   cy.contains('Shop').should('be.visible');
    });
  
  });
  