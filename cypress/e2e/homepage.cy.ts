export {};

describe("Todo Homepage", () => {
  const LOCAL_URL = "http://localhost:5173/";

  it("visits Todo Homepage", () => {
    cy.visit(LOCAL_URL);
  });
});
