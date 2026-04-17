describe("bookingOfTickets", () => {
  it("bookingOfTicketsFromAdmin", () => {
    cy.visit("/admin/");
    const adminLoginData = require("../fixtures/adminLoginData.json");
    const happy = adminLoginData.happyPath;

    cy.get('[name="email"]').type(happy.email);
    cy.get('[name="password"]').type(happy.password);
    cy.get(".login__button").click();
    cy.contains(happy.expectedText).should("be.visible");

    cy.get('[data-film-id="131"] .conf-step__movie-title')
      .invoke("text")
      .then((text) => {
        const movieTitle = text.trim(); 
        
        cy.visit("/");
        cy.get("a.page-nav__day:nth-of-type(4)").click();
        
        cy.contains(".movie__title", movieTitle)
          .parents(".movie")
          .as("targetMovie");

        cy.get("@targetMovie").find(".movie-seances__time").first().click();

        const seats = require("../fixtures/seats.json");
        seats.forEach((seat) => {
          cy.get(
            `.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`,
          ).click();
        });
        cy.get(".acceptin-button").click();
        cy.contains("Получить код бронирования").should("be.visible");
      });
  });
});
