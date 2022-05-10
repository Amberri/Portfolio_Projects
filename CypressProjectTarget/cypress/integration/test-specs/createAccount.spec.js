///<reference types="cypress" />
import basePage from "../page-objects/basedPage";
import home from "../page-objects/home";
import createAccount from "../page-objects/createAccount";
import input from "../../fixtures/input.json";

var createAcct = new createAccount();
let visible = input.visible
let doesNotExist = input.invisible

describe("Create Account Form Test", function () {
  before("Visit www.target.com Website.", function () {
    basePage.getUrl()
    basePage.verifyOnHomePage()
    cy.wait(20000)
  })
  it("Go to Create Account Page.", () => {
    home.openAccountMenu()
    home.clickAccountMenu_CreateAccountLnk()
  })
  it('Verify Now On Create Account Page.', () => {
    createAcct.verify_OnCreateAccountPage(input.path_CreateAccountPage)
  })
  it('Verify all form elements are visible.', () => {
    createAcct.verify_getEmailFld_Visible()
    createAcct.verify_getFirstNameFld_Visible()
    createAcct.verify_getLastNameFld_Visible()
    createAcct.verify_getMobileFld_Visible()
    createAcct.verify_getPasswordFld_Visible()
    createAcct.verify_KeepMeSignedInChkBx_Visible()
    createAcct.verify_CreateYourTargetAccountBtn_Visible()
  })
  it('Verify all form elements Attributes.', () => {
    createAcct.verify_EmailFld_Attributes()
    createAcct.verify_getFirstNameFld_Attributes()
    createAcct.verify_getLastNameFld_Attributes()
    createAcct.verify_getMobileFld_Attributes()
    createAcct.verify_PasswordFld_Attributes()
    createAcct.verify_PasswordShowHideToggle_Functional()
    createAcct.verify_KeepMeSignedInChkBx_Attributes()
    createAcct.verify_CreateYourAccountBtn_Attributes(input.ca_txtCreateYourAccountBtn)
  })
  describe('Verify required fields highlighted & "Enter Data" warning messages display when empty form submitted.', () => {
    it("Submit empty form.", () => {
      createAcct.submit_CreateAccountForm()
      createAcct.verify_OnCreateAccountPage(input.path_CreateAccountPage)
    })
    it("Verify Required Fields Highlighted.", () => {
      createAcct.verify_RequiredFldEmail_Highlighted()
      createAcct.verify_RequiredFldFirstName_Highlighted()
      createAcct.verify_RequiredFldLastName_Highlighted()
      createAcct.verify_RequiredFldPassword_Highlighted()
    })
    it('Verify "Enter Data" Warning Messages display.', () => {
      createAcct.verify_EmailFldWarningMsg(visible, input.ca_WrngMsg_EmailFld)
      createAcct.verify_FirstNameFldWarningMsg(visible, input.ca_WrngMsg_FirstNameFld)
      createAcct.verify_LastNameFldWarningMsg(visible, input.ca_WrngMsg_LastNameFld)
      //password field only displays highlight. No warning message.
    })
    it("Verify Password Requirements display When Cursor enters Blank Password Field.", () => {
      createAcct.verify_PasswordReqrmntsAppear()
    })
  })

  describe('Verify "Invalid Data" warning messages display & fields highlighted when invalid information entered.', () => {
    it('Enter Invalid form Data.', () => {
      createAcct.set_EmailFld(input.invalid_Email)
      createAcct.set_FirstNameFld(input.invalid_Firstname)
      createAcct.set_LastNameFld(input.invalid_Lastname)
      createAcct.set_MobileFld(input.invalid_Mobile)
      createAcct.set_PasswordFld(input.invalid_Password)
      //createAcct.setValidateKeepMeSignedInChkbx()
    })
    it("Verify fields highlighted.", () => {
      createAcct.verify_RequiredFldEmail_Highlighted()
      createAcct.verify_RequiredFldMobile_Highlighted()
      createAcct.verify_RequiredFldPassword_Highlighted()
    })
    it('Verify "Invalid Data" warning messages display.', () => {
      createAcct.verify_EmailFldWarningMsg(visible, input.ca_InvldInptMsg_EmailFld)
      createAcct.verify_MobileFldWarningMsg(visible, input.ca_InvldInptMsg_MobileFld)
    })
  })
  describe('Verify required field highlights & warning messages disappear when valid info entered.', () => {
    it('Enter Valid form Data.', () => {
      createAcct.set_EmailFld(input.valid_email)
      createAcct.set_FirstNameFld(input.valid_firstname)
      createAcct.set_LastNameFld(input.valid_lastname)
      createAcct.set_MobileFld(input.valid_mobile)
      createAcct.set_PasswordFld(input.valid_password)
      //createAcct.setValidateKeepMeSignedInChkbx()
    })
    it("Verify Warning Messages Disappear when filled with Valid Values", () => {
      createAcct.verify_EmailFldWarningMsg(doesNotExist)
      createAcct.verify_FirstNameFldWarningMsg(doesNotExist)
      createAcct.verify_LastNameFldWarningMsg(doesNotExist)
      createAcct.verify_MobileFldWarningMsg(doesNotExist)
      createAcct.verify_PasswordFldWarningMsg(doesNotExist)
      createAcct.setValidateKeepMeSignedInChkbx()

    })
  })
})
