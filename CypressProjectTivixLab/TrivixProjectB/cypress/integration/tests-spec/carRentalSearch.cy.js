///<reference types="cypress" /> 
import basePO from "../page-objects/basePO"
import detailPO from "../page-objects/detailPO"
import searchPO from "../page-objects/searchPO"
import input from "../../fixtures/input.json";

const detailPagePath ="detail"
const RentPagePath ="/rent"

describe("Car Rental E2E - Tivix Lab Website", function () {

 before("Navigate to Car Rental Website", function () {
      basePO.getSearchUrl()
      cy.wait(8000)
    })

 context('Verify Form Field Defaults And Values Are Set.', function () {

    it('Verify Country Drop Down default value', function () {
        searchPO.verify_DDLCountry_defaultValue(input.defaultSelect)
    })
    it('Verify City Drop Down default value', function () {
        searchPO.verify_DDLCity_defaultValue(input.defaultSelect)
    })
    it('Verify Country Drop Down List default options correct', function () {
        searchPO.verify_DDLCountry_Values()
    })
    it('Verify City Drop Down List default options correct', function () {
        searchPO.verify_DDLCity_Values()
    })
    it('Verify Model Text Field default field values', function () {
        searchPO.verify_TXTFLDModel_Values(input.defaultModel)
    })
    it('Verify Pick-up Field Type Set To Date', function () {
        searchPO.verify_DTPKRPickUp_Values()
        searchPO.verify_DTPKRDropOff_Values()
    })
    it('Verify Drop-Off Field Type Set To Date', function () {
        searchPO.verify_DTPKRDropOff_Values()
    })
    it('Verify Default Message Text Value', function () {
        searchPO.verify_getALERTFillForm_Values(input.defaultMessage)
    })
 })

 context('Verfiy When Valid Input Submitted Results Display.', function () {
    it('Set Country drop down list value to "Poland"', function () {   
        searchPO.set_DDLCountry(input.Country) 
    })
    it('Set City drop down list value to "Paris"', function () {  
        searchPO.set_DDLCity(input.City)
    })
    it('Set Model field to "Toyota"', function () {  
        searchPO.set_TXTFLDModel(input.carModel)
    })
    it('Set Pick-up Date Field', function () {   
        searchPO.set_DTPKRPickUp(input.pickUpDate)
    })
    it('Set Drop-off Date Field', function () {  
        searchPO.set_DTPKRDropOff(input.dropOffDate)
    })
    it('Submit Form for results', function () {  
        searchPO.submit_Form()
    })
    it('Verify Car Search results display', function () {  
        searchPO.verify_ResultsDisplay()
    })
 })

 context('Verify Car Results Match Search Criteria', function () {
    it('Verify all Models listed are "Toyota"', function () { 
        searchPO.verify_ResultsValid()
    })
 })

 context('Verify Car Details Page Displaying Correct Information', function () {
    it('Select A Car from Search Result List to View its Details', function () {
        searchPO.navigateToDetailPage(3) 
    })
    it("Verify Your on the Details Page for the Car", function () {
        basePO.verify_NavigationSuccessful(detailPagePath) 
    })  
    // it('Verify Car Details Match Search List Record Selected', function () {   
    //    // searchPO.verify_DetailsPageResultsMatchCarSelected() 
    // })
})

 //Page would not render
//  context('Go to Booking Page to Rent Selected Car', function () {
//      it('Click on Rent Button in Details Page', function () { 
//      //   detailPO.navigateToBookingPage()
//      })
//      it('Go to Booking Page to Rent Selected Car', function () { 
//      //   basePO.verify_NavigationSuccessful(RentPagePath)  
//     })
//   })         
})