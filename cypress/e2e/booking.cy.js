describe("bookingOfTickets", () => {
  it("bookingOfTicketsFromAdmin", () => {
    const adminLoginData = require("../fixtures/adminLoginData.json");
    const happy = adminLoginData.happyPath;
    const { book } = require("../fixtures/bookingSelectors.json");

    cy.visit("/admin/"); // идём в админку
    cy.login(happy.email, happy.password, happy.expectedText); // авторизуемся

    // находим название фильма
    cy.getMovieTitle().then((text) => {
      const movieTitle = text.trim(); // сохраняем название фильма в переменную

      cy.visit("/"); // идём на главную страницу
      cy.get(book.fourthDay).click(); // выбираем 4-й день, например
      cy.getClosestSession(movieTitle); // выбираем ближайший сеанс
      cy.bookingSeats(); // бронируем места

      cy.contains(book.assertText).should("be.visible"); // ассерт: должен быть видим текст ("Получить код бронирования")
    });
  });
});
