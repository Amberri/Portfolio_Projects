///<reference types="cypress" />
import basePage from "../page-objects/basedPage";
import home from "../page-objects/home";

describe("Target Main Navigation Link Test", function () {
    before("Load Website", function () {
        basePage.getUrl()
        basePage.verifyOnHomePage()
        cy.wait(20000)
    })
    describe("Ensure all 'Category' Menu links Functional", () => {
        it('Click On Category Menu.', () => {
            home.click_MenuCategory()
        })
        it('Verify all Sublinks Working.', () => {
            home.verify_MenuCategory_SublinksWork()
        })
    })
    describe("Ensure all 'Deals' Menu Links Functional", () => {
        it('Click On Deals Menu.', () => {
            home.click_MenuDeals()
        })
        it('Verify all Sublinks Working.', () => {
            home.verify_MenuDeals_SublinksWork()
        })
    })
    describe("Ensure all 'What's New' Menu Links Functional", () => {
        it('Click On What\'sNew Menu.', () => {
            home.click_MenuWhatsNew()
        })
        it('Verify all Sublinks Working.', () => {
            home.verify_MenuWhatsNew_SublinksWork()
        })
    })
    describe("Ensure all 'Pickup & Delivery' Menu Links Functional", () => {
        it('Click On PickUp & Delivery Menu.', () => {
            home.click_MenuPickUpDelivery()
        })
        it('Verify all Sublinks Working.', () => {
            home.verify_MenuPickUpDelivery_SublinksWork()
        })
    })
    describe("Ensure all 'Sign In' Menu Links Functional", () => {
        it('Click On Sign In Menu.', () => {
            home.openAccountMenu()
        })
        it('Verify all Sublinks Working.', () => {
            home.verify_AccountMenu_SublinksWork()
        })
    })
}) 
describe("Ensure all 'Utility' Menu Links Functional", () => {
        it('Verify Links Functional.', () => {
            home.verify_UtilityLinks()
        })
    })
describe("Target Footer Menu Link Test", function () {
    it('Verify Links Functional.', () => {
        home.verify_FooterLinks()
    })
})
