///<reference types="Cypress" />
import basePage from "../page-objects/basedPage";
import home from "../page-objects/home";
import signIn from "../page-objects/signIn";
import input from '../../fixtures/input.json';
var sign_In = new signIn();
let visible = "visible";
let doesNotExist = "invisible";


describe('Sign In Form Test', function () {
    before('Visit www.target.com Website', function () {
        basePage.getUrl()
        basePage.verifyOnHomePage()
    })
    it('Go to Sign In Page', () => {
        home.openAccountMenu()
        home.clickAccountMenu_SignInLink()
    })
    it('Verify Now On Sign In Page.', () => {
        sign_In.verify_OnSignInPage(input.path_SignInPage)
    })
    it('Verify all form elements are visible.', () => {
        sign_In.verify_getEmailFld_Visible()
        sign_In.verify_getPasswordFld_Visible()
        sign_In.verify_KeepMeSignedInChkBx_Visible()
        sign_In.verify_SignInBtn_Visible()
        sign_In.verify_ForgotPasswordLnk_Visible()
        sign_In.verify_CreateYourTargetAccountBtn_Visible()
    })
    it('Verify all form elements attributes.', () => {
        sign_In.verify_EmailFld_Attributes()
        sign_In.verify_PasswordFld_Attributes()
        sign_In.verify_KeepMeSignedInChkBx_Attributes()
        sign_In.verify_SignInBtn_Attributes(input.sn_txtSignInBtn)
        sign_In.verify_ForgotPasswordLnk_Attributes(input.sn_txtForgotPasswordLnk)
        sign_In.verify_CreateYourAccountBtn_Attributes(input.sn_txtCreateYourAccountBtn)
        sign_In.verify_PasswordShowHideToggle_Functional()
    })
    describe('Verify required fields highlighted & "Enter Data" warning messages display when empty form submitted.', () => {
        it('Submit empty form.', () => {
            sign_In.submit_LoginForm()
            sign_In.verify_OnSignInPage(input.path_SignInPage)
            cy.wait(4000)
        })
        it("Verify required fields highlighted.", () => {
            sign_In.verify_RequiredFldEmail_Highlighted()
            sign_In.verify_RequiredFldPassword_Highlighted()
        })
        it('Verify "Enter Data" warning messages display.', () => {
            sign_In.verify_EmailFldWarningMsg(visible, input.sn_WrngMsg_EmailFld)
            sign_In.verify_PasswordFldWarningMsg(visible, input.sn_WrngMsg_PasswordFld)
        })

    })
    //verify required fields highlight & warning messages appear when invalid info entered.
    describe('Verify required fields highlighted & "Invalid Data" warning messages display when invalid information entered.', () => {
        it('Enter invalid username and password.', () => {
            sign_In.set_EmailFld(input.invalid_Email)
            sign_In.set_PasswordFld(input.invalid_Password)
        })
        it("Verify required fields highlighted.", () => {
            sign_In.verify_RequiredFldEmail_Highlighted()
            sign_In.verify_RequiredFldPassword_Highlighted()
        })
        it('Verify "Invalid Data" warning messages display.', () => {
            sign_In.verify_EmailFldWarningMsg(visible, input.sn_InvldInptMsg_EmailFld)
            sign_In.verify_PasswordFldWarningMsg(visible, input.sn_InvldInptMsg_PasswordFld)
        })
    })
    describe('Verify required field highlights & warning messages disappear when valid info entered.', () => {
        it('Enter valid username password.', () => {
            sign_In.set_EmailFld(input.valid_email)
            sign_In.set_PasswordFld(input.valid_password)
        })
        it("Verify required fields unhighlighted.", () => {
            sign_In.verify_RequiredFldEmail_UnHighlighted()
            sign_In.verify_RequiredFldPassword_UnHighlighted()
        })
        it('Verify warning messages disappear when valid username and password entered.', () => {
            sign_In.verify_EmailFldWarningMsg(doesNotExist)
            sign_In.verify_PasswordFldWarningMsg(doesNotExist)
        })
    })
})

