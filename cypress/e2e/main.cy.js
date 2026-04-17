beforeEach(() => {
  // перед каждым тестом идём по URL из конфиг-файла + эндпойнт
  cy.visit("/client/index.php");
});

describe("The main page display spec", () => {
  // тест-сьют отображения главной страницы
  it("Should display the logo", () => {
    // проверяем отображение логотипа
    cy.contains("Идёмвкино").should("be.visible");
  });

  it("Should display correct number of days", () => {
    // проверяем корректное количество дней недели
    cy.get(".page-nav__day").should("have.length", 7);
  });

  it("Should display the main body", () => {
    // проверяем отображение главного тела страницы
    cy.get("main").should("be.visible");
  });
});
