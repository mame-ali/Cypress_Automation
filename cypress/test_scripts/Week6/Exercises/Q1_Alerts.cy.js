

describe("Alerts and popups handling", () => {

    beforeEach(() => {
        cy.visit("https://vinothqaacademy.com/alert-and-popup/")
    });
    it('Alert handling', () => {
        // cy.visit("https://vinothqaacademy.com/alert-and-popup/")
        cy.on('window:alert',(alertmsg)=>{
            expect(alertmsg).to.equal('I am an alert box!')

        })
        cy.get('.elementor-element-fc8696a > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > center > button').click();
        cy.get('#demotwo').should('have.text', 'You clicked on OK!')
        cy.wait(2000);

    });

    it('confirm box handling', () => {
        cy.on('window:confirm',(confirmMsg)=>{
            expect(confirmMsg).to.equal('Confirm pop up with OK and Cancel button')
            return false
        })
        
        cy.get('.elementor-element-01aedcf > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > center > button').click();
        cy.get('#demo').should('have.text', "You clicked on Cancel!")

        cy.wait(2000);
    });


    it('prompt box handling test case',() => {
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('YES')
        })
        cy.get('.elementor-element-d0c9145 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > center > button').click();
        cy.get('#demoone').should('have.text',"Thanks for Liking Automation")
    });

});