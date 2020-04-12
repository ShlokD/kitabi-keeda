describe("Home Page", () => {
  before(() => {
    cy.visit("localhost:5000");
  });

  it("renders a search bar with image and title", () => {
    cy.get("[data-test=page-title]").should("have.length", 1);
  });

  it("renders a featured image", () => {
    cy.get("[data-test=featured-image").should("have.length", 1);
  });

  it("renders search input", () => {
    cy.get("[data-test=search-input]").should("have.length", 1);
  });
});
