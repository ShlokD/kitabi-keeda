describe("Home Page", () => {
  before(() => {
    cy.visit("localhost:5000");
  });

  it("renders a search bar with title", () => {
    cy.get("[data-test=page-title]").should("have.length", 1);
  });

  it("renders search input", () => {
    cy.get("[data-test=search-input]").should("have.length", 1);
  });

  it("renders 10 book items on search", () => {
    cy.get("[data-test=search-input]").type("Murakami{enter}");
    cy.wait(5000);
    cy.get("[data-test=book-list-item]").should("have.length", 10);
  });

  it("renders next page button on a successful search", () => {
    cy.get("[data-test=search-input]").type("Murakami{enter}");
    cy.wait(5000);
    cy.get("[data-test=next-page-button]").should("have.length", 1);
  });

  it("renders decrement button after forward paginations", () => {
    cy.get("[data-test=search-input]").type("Murakami{enter}");
    cy.wait(5000);
    cy.get("[data-test=next-page-button]").click();
    cy.wait(5000);
    cy.get("[data-test=prev-page-button").should("have.length", 1);
  });
});
