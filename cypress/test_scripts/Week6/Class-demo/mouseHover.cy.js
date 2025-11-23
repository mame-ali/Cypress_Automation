
describe('Mouse Hover', () => {
    it.skip('Mouse Hover Example', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
// 1.Using trigger (‘mouseover’)
// 2. Using invoke (‘show’)
// 3. Using cypress-real-event plugin
// 4. Force click  click({ force: true })

        
        cy.get('.mouse-hover-content').invoke('show')  // Method 2
        cy.get('.mouse-hover-content a[href="#top"]').should('be.visible')
        cy.contains('Reload').should('be.visible')

        // Method 1
        // cy.get('.mouse-hover-content').trigger('mouseover')
        // cy.get('.mouse-hover-content a[href="#top"]').click()
    
    }),
    it('Tooltips', () => {
        cy.visit('https://practice.expandtesting.com/tooltips');
        cy.get('#btn1').invoke('show').should('be.visible')
    
    })
    
});
