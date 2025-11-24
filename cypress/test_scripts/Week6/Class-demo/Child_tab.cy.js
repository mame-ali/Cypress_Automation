describe("Child tab handling", () => {

    it("Child tab", () => {
        cy.visit('https://www.letskodeit.com/practice');

        // Remove target attribute to open link in the same tab
        cy.get('#opentab').invoke('removeAttr','target').click();
        cy.url().should("include", "/courses");
        cy.go('back');
        cy.wait(3000);
        cy.go('forward');


        // Optionally, you can add more assertions here to verify content on the new page
    });
    it("new window", () => {
        cy.visit('https://www.letskodeit.com/practice');
        let url = 'https://www.letskodeit.com/courses';
        cy.window().then(win =>{
            cy.stub(win,'open').callsFake(url =>{
                window.location.url = url;
            })
        })
        cy.get('#openwindow').click();
    });
});