
describe("Web Table Demo", () => {
    it("verify the value at web table", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('table tbody tr td:nth-child(2)').contains("WebSecurity").should('exist')
    }),

    it("verify logical conditon", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('table tbody tr td:nth-child(2)').each(($el, index, $list) => {
            var courseName = $el.text();
            if(courseName.includes("QA Expert")){
                cy.get('table tbody tr td:nth-child(2').eq(index).next().then((price)=>{
                    const coursePrice = price.text();
                    expect(coursePrice).equal("25")
                })
            }
        })
    })

});