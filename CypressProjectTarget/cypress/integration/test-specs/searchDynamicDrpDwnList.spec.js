///<reference types="Cypress" />
import basePage from "../page-objects/basedPage";
import home from "../page-objects/home";
import input from '../../fixtures/input.json';

let searchList = ["bed", "bath", "house"];

describe("Target Main Navigation Link Test", function () {
  before("Load Website", function () {
    basePage.getUrl()
    basePage.verifyOnHomePage()
    cy.wait(20000)
  })
  it('Enter search item. Verify Dynamic Dropdown has Search Item in each', () => {
    searchList.forEach(($el, index, $list) => {
      home.verify_SearchResultsContainItem($el)
    })
  })
})

