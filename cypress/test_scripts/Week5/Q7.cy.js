describe("Test suiit7", () => {

    it("Ex7", ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    
        cy.get('#dropdown-class-example').select('Option2').should('have.value', 'option2');
        // cy.get("#dropdown-class-example").select(3)
    
    
        // cy.get('#dropdown-class-example').select('Option3').should('have.value', 'option3');
    
      });
});