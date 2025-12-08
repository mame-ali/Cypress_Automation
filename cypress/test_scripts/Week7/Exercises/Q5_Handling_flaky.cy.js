// Handle flaky test reruns
describe(
    "My ExpandTesting Login Retry Flow",
    {
      retries: {
        runMode: 1,   // retry once in CLI run mode
        openMode: 1,  // retry once in interactive mode
      },
    },
    () => {
      it("Verifies login form appears after delay", () => {
        cy.visit("https://practice.expandtesting.com/login");
  
        // Target flaky element with retry + timeout
        cy.get("#newForm", { timeout: 4000 })
          .should("be.visible")
          .and("contain", "Email");
      });
    }
  );
  