describe("Visual Regression Tests", () => {
  it("should match the homepage snapshot", () => {
    cy.visit("/");
    cy.compareSnapshot("homepage");
  });
});
