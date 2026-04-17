// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// авторизация в админке
Cypress.Commands.add("login", (email, password, expectedText) => {
  const { admin } = require("../fixtures/adninSelectors.json");

  cy.get(admin.email).type(email);
  cy.get(admin.password).type(password);
  cy.get(admin.login).click();
  cy.contains(expectedText).should("be.visible");
});

// находим название фильма в админке и извлекаем его текст для переменной
Cypress.Commands.add("getMovieTitle", () => {
  const { book } = require("../fixtures/bookingSelectors.json");

    cy.get(book.movieTitle).invoke("text");
});

Cypress.Commands.add("getClosestSession", (movieTitle) => {
  const { book } = require("../fixtures/bookingSelectors.json");

  cy.contains(book.title, movieTitle).parents(book.movie).as("targetMovie"); // находим фильм и сохраняем как алиас
  cy.get("@targetMovie").find(book.time).first().click(); // бранируем первое время в найденном фильме
});

Cypress.Commands.add("bookingSeats", () => {
  const { book } = require("../fixtures/bookingSelectors.json");
  const seats = require("../fixtures/seats.json");
    
  seats.forEach((seat) => {
    cy.get(
      `${book.hall} ${book.class}(${seat.row}) ${book.class}(${seat.seat})`,
    ).click();
  });
  cy.get(book.accept).click();
});


//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
