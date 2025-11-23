
//cy.on(event, callback) method and 
//we have to pass window:alert as an event and in a callback We can do any validations.
describe("Alert and Popup Handling", () => {
    it("Handle alert", ()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.on("window:alert", (alerText)=>{
            expect(alerText).to.equal('I am a JS Alert');
        });
        cy.get(':nth-child(1) > button').click();
        cy.get('#result').should('have.text', 'You successfully clicked an alert');

    }),

    //Handling Confirm Box
    it("Handle confirm", ()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.on("window:confirm", (confirmText)=>{
            expect(confirmText).to.equal('I am a JS Confirm');
            //this should have return true to click ok and false to click cancel
            return true;
        });
        cy.get(':nth-child(2) > button').click();
        cy.get('#result').should('have.text', 'You clicked: Ok');
        

    }),
//Handling Prompt Box
    it("Handle Prompt", ()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
            //we use cy.window().then(callback)

      cy.window().then((win)=>{
        cy.stub(win, 'prompt').returns('hello prompt')
      })
      cy.get(':nth-child(3) > button').click();
        cy.get('#result').should('have.text', 'You entered: hello prompt');
        });
    
});
