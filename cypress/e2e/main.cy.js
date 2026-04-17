beforeEach(() => {
  // перед каждым тестом идём по URL из конфиг-файла + эндпойнт
  cy.visit("/client/index.php");
});

// тест-сьют отображения главной страницы
describe("The main page display spec", () => {
  const { main } = require("../fixtures/mainSelectors.json");
  
  // проверяем отображение логотипа
  it("Should display the logo", () => {
    cy.contains(main.logo).should("be.visible");
  });

  // проверяем корректное количество дней недели
  it("Should display correct number of days", () => {
    cy.get(main.days).should("have.length", 7);
  });

  // проверяем отображение главного тела страницы
  it("Should display the main body", () => {
    cy.get(main.body).should("be.visible");
  });
});
