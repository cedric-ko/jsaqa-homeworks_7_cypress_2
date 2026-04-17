describe("Admin login tests", () => {
  beforeEach(() => {
    cy.visit("/admin/");
  });

  const adminLoginData = require("../fixtures/adminLoginData.json");
  
  it("Should successfully login", () => {
    const happy = adminLoginData.happyPath; 
    cy.login(happy.email, happy.password, happy.expectedText);
  });

  it("Should not login with invalid email", () => {
    const invalid = adminLoginData.invalidEmail; 
    cy.login(invalid.email, invalid.password, invalid.expectedText);
  });

  it("Should not login with invalid password", () => {
    const invalid = adminLoginData.invalidPassword;
    cy.login(invalid.email, invalid.password, invalid.expectedText);
  });
});
