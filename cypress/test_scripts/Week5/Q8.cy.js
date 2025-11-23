describe("Checkbox Enable/Disable Test for All 3", () => {
    it("Should disable, enable, and select all checkboxes", () => {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  
      // Select all 3 checkboxes
      cy.get("input[type='checkbox']").as("checkboxes"); // aliases all checkboxes
  
      // Step 1: Force disable all checkboxes
      cy.get("@checkboxes").each(($el) => {
        cy.wrap($el).invoke("attr", "disabled", true);
      });
  
      // Step 2: Verify all checkboxes are disabled
      cy.get("@checkboxes").each(($el) => {
        cy.wrap($el).should("be.disabled");
      });
  
      // Step 3: Enable all checkboxes
      cy.get("@checkboxes").each(($el) => {
        cy.wrap($el).invoke("removeAttr", "disabled");
      });
  
      // Step 4: Verify all checkboxes are enabled
      cy.get("@checkboxes").each(($el) => {
        cy.wrap($el).should("not.be.disabled");
      });
  
      // Step 5: Check all checkboxes
      cy.get("@checkboxes").each(($el) => {
        cy.wrap($el).check().should("be.checked");
      });
    });
  });