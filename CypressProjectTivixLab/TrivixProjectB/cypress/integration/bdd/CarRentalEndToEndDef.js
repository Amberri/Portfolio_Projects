import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import basePO from "../page-objects/basePO" 
import searchPO from "../page-objects/searchPO"
import input from "../../fixtures/input.json";

const detailPagePath ="detail" 
 
Given('I open the Car Rental Website Page', function () 
{  
        basePO.getSearchUrl()
        cy.wait(8000)
})
When('I set and submit the search criteria',function () 
{
        searchPO.set_DDLCountry(input.Country) 
        searchPO.set_DDLCity(input.City)
        searchPO.set_TXTFLDModel(input.carModel)
        searchPO.set_DTPKRPickUp(input.pickUpDate)
        searchPO.set_DTPKRDropOff(input.dropOffDate)
        searchPO.submit_Form()
})
Then('The search results should display',function () {
        searchPO.verify_ResultsDisplay()
})