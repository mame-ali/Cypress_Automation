// SMALL MoDAL
describe("Modal Window Visibility Test", () => {
    // Ignore DemoQA cross-origin script errors
    Cypress.on("uncaught:exception", () => false);
  
    it("opens the Small Modal window correctly", () => {
      // Visit the page
      cy.visit("https://demoqa.com/modal-dialogs");
  
      // Check that the modal window is not visible by default
      cy.get(".modal-content").should("not.exist");
  
      // Click the button that opens the modal window
      cy.get("#showSmallModal").click();
  
      // Verify that the modal window becomes visible
      cy.get(".modal-content").should("be.visible");
      cy.get("#example-modal-sizes-title-sm")
        .should("be.visible")
        .and("contain", "Small Modal");
    });
  });
  
  // Large Modal
  describe.only("Large Modal Visibility Test", () => {
    // Ignore DemoQA cross-origin script errors
    Cypress.on("uncaught:exception", () => false);
  
    it("opens the Large Modal window correctly", () => {
      // Visit the page
      cy.visit("https://demoqa.com/modal-dialogs");
  
      // Check that the modal window is not visible by default
      cy.get(".modal-content").should("not.exist");
  
      // Click the button that opens the Large Modal
      cy.get("#showLargeModal").click();
  
      // Verify that the modal window becomes visible
      cy.get(".modal-content").should("be.visible");
      cy.get("#example-modal-sizes-title-lg")
        .should("be.visible")
        .and("contain", "Large Modal");
    });
  });