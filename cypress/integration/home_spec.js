describe("Home Page", () => {
  it("renders a search bar with image and title", () => {
    cy.visit("localhost:5000");
    const searchBar = cy.get("[data-test=search-bar]");
    searchBar.should("have.length", 1);
    searchBar.get("[data-test=search-icon]").should("have.length", 1);
    searchBar.get("[data-test=page-title]").should("have.length", 1);
  });

  it("renders a featured image", () => {
    cy.get("[data-test=featured-image").should("have.length", 1);
  });
});
