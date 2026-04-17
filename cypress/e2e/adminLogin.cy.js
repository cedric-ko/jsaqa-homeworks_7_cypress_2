describe("Admin login tests", () => {
  beforeEach(() => {
    cy.visit("/admin/");
  });

  const adminLoginData = require("../fixtures/adminLoginData.json");

  it("Should successfully login", () => {
    const happy = adminLoginData.happyPath; 

    cy.get('[name="email"]').type(happy.email); 
    cy.get('[name="password"]').type(happy.password); 
    cy.get(".login__button").click(); 
    cy.contains(happy.expectedText).should("be.visible");
  });

  it("Should not login with invalid email", () => {
    const invalid = adminLoginData.invalidEmail; 

    cy.get('[name="email"]').type(invalid.email);
    cy.get('[name="password"]').type(invalid.password);
    cy.get(".login__button").click();
    cy.contains(invalid.expectedText).should("be.visible");
  });

  it("Should not login with invalid password", () => {
    const invalid = adminLoginData.invalidPassword;

    cy.get('[name="email"]').type(invalid.email);
    cy.get('[name="password"]').type(invalid.password);
    cy.get(".login__button").click();
    cy.contains(invalid.expectedText).should("be.visible");
  });
});
