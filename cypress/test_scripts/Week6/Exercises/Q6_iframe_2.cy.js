import "cypress-iframe";

describe("Switching Between Main Page and iFrame", () => {
  it("Interacts with main page and iframe elements", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get('input[name="radioButton"][value="radio2"]')
      .check()
      .should("be.checked");

    cy.frameLoaded("#courses-iframe");
    cy.iframe("#courses-iframe").within(() => {
      // Assert heading inside iframe contains a flexible key phrase
      // Click first course link
      // cy.get('a[href*="courses"]').first().click();
    });

    // Back to main page
    // cy.get("#autocomplete").type("India");
    // cy.get("#dropdown-class-example")
    //   .select("option2")
    //   .should("have.value", "option2");
    // cy.get("#checkBoxOption3").check().should("be.checked");
  });
});