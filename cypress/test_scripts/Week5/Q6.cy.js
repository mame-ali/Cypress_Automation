describe("test suit7", ()=>{
    it("Ex6", ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    
      cy.get('input[type="checkbox"]').check(['option2', 'option3']).should("be.checked");
    
      });
})