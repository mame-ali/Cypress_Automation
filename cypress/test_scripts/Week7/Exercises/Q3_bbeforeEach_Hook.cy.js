//-------------------------------------
// My Exercise: Cart State Validation
//-------------------------------------
describe("My Bookstore Cart Flow with Hooks", () => {
    // Helper: get cart badge
    const cartBadge = () => cy.get("span.badge");
  
    // Helper: clear cart items
    const clearCart = () => {
      cy.get("body").then(($body) => {
        const deleteBtns = $body.find('a.btn.btn-danger.btn-sm[role="button"]');
        if (deleteBtns.length > 0) {
          cy.get('a.btn.btn-danger.btn-sm[role="button"]').each(($btn) => {
            cy.wrap($btn).click({ force: true });
          });
        }
      });
  
      // Assert cart is empty
      cartBadge().should(($badge) => {
        const val = $badge.text().trim();
        expect(val === "" || val === "0").to.be.true;
      });
    };
  
    // ------------------------------
    // BEFORE EACH TEST
    // ------------------------------
    beforeEach(() => {
      cy.visit("https://practice.expandtesting.com/bookstore");
      clearCart(); // always start clean
    });
  
    // ------------------------------
    // TEST 1: Empty cart check
    // ------------------------------
    it("Cart should be empty at start", () => {
      cartBadge().then(($badge) => {
        const val = $badge.text().trim();
        expect(val === "" || val === "0").to.be.true;
      });
    });
  
    // ------------------------------
    // TEST 2: Add book
    // ------------------------------
    it("Cart updates when a book is added", () => {
      cy.contains("Add To Cart").first().click({ force: true });
      cartBadge().should(($badge) => {
        expect($badge.text().trim()).to.eq("1");
      });
    });
  
    // ------------------------------
    // TEST 3: Remove book
    // ------------------------------
    it("Cart resets when a book is removed", () => {
      // Add a book
      cy.contains("Add To Cart").first().click({ force: true });
      cartBadge().should(($badge) => {
        expect($badge.text().trim()).to.eq("1");
      });
  
      // Go to cart page
      cy.visit("https://practice.expandtesting.com/bookstore/cart");
      cy.get("table tbody tr", { timeout: 8000 }).should("exist");
  
      // Delete item
      cy.get("table tbody tr td a.btn.btn-danger.btn-sm")
        .first()
        .click({ force: true });
  
      // Confirm empty
      cy.visit("https://practice.expandtesting.com/bookstore/cart");
      cartBadge().then(($badge) => {
        const val = $badge.text().trim();
        expect(val === "" || val === "0").to.be.true;
      });
    });
  });
  