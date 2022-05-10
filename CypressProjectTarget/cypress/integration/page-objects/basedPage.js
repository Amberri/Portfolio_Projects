class basePage {
  getUrl() {
    return cy.visit(Cypress.env('baseUrl'))
  }
  //functions
  verifyOnHomePage() {
    cy.url().should('eq', Cypress.env('baseUrl'))
  }
}
export default new basePage();