describe("parameterising multiple users", () => {
  before(() => {
    cy.fixture("example").as("loginData"); 
  });

  beforeEach(() => {
    cy.visit("https://rahulshettyacademy.com/loginpagePractise/");
  });

  it("logs in multiple users from fixture", function () {
    // Access the fixture data
    const users = this.loginData;

    users.forEach((user) => {
      cy.get("#username").clear().type(user.username);
      cy.get("#password").clear().type(user.password);
      cy.get("#signInBtn").click()
      
    });
  });
});