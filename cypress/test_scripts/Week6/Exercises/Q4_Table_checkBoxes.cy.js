describe('Table Checkboxes - Test suite', () => {
    beforeEach(() => {
      cy.visit('https://vinothqaacademy.com/webtable/');
    });
  
    it('checks and validates a specific row', () => {
      const name = 'Linda Wilson';
      const role = 'Business Analyst';
      const email = 'linda.wilson@example.com';
      const location = 'Chicago';
      const department = 'Analysis';
  
      // Find the row by visible name, then operate inside that row
      cy.contains('table tbody tr', name).within(() => {
        // 1) check the checkbox in this row
        cy.get('input[type="checkbox"]').check().should('be.checked');
  
        // 2) assert the other columns (assumes columns order: Select | Name | Role | Email | Location | Department)
        cy.get('td').eq(2).should('have.text', role);
        cy.get('td').eq(3).should('have.text', email);
        cy.get('td').eq(4).should('have.text', location);
        cy.get('td').eq(5).should('have.text', department);
  
        // 3) uncheck to restore state (optional)
        cy.get('input[type="checkbox"]').uncheck().should('not.be.checked');
      });
    });
  });
  