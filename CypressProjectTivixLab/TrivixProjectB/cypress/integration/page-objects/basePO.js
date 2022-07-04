class basePO {

  getSearchUrl() {
    return cy.visit(Cypress.env('baseCarSearchUrl'))
  }
   
  getDetailUrl() {
    cy.url().should('eq', Cypress.env('carDetailUrl'))
  }

  getRentUrl() {
    cy.url().should('eq', Cypress.env('carRentUrl'))
  }
  
  verify_NavigationSuccessful(path){
    const p=path
     cy.url().should("contain", p)
  }


}
export default new basePO();