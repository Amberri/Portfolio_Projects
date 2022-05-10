class signIn {
    //Sign In Form Fields
    getEmailFld() {
        return cy.get('#username');
    }
    getPasswordFld() {
        return cy.get('#password');
    }
    getShowBtn() {
        return cy.get('button').contains("show");
    }
    getHideBtn() {
        return cy.get('button').contains("hide");
    }
    getKeepMeSignedInChkBx() {
        return cy.get('#keepMeSignedIn');
    }
    getForgotPasswordLnk() {
        return cy.get('#recoveryPassword')
    }
    getPasswordFldWrapper() {
        return cy.get('div[class^=');
    }
    getSignInBtn() {
        return cy.get('#login');
    }
    getCreateYourTargetAccountBtn() {
        return cy.get('#createAccount');
    }
    //Create Account Form - Required/Warning/Error/Messages
    getEmailFldwrngMsg() {
        return cy.get('#username--ErrorMessage');
    }
    getPasswordFldwrngMsg() {
        return cy.get('#password--ErrorMessage');
    }
    getMobileFldwrngMsg() {
        return cy.get('#phone--ErrorMessage');
    }
    getLastNameFldwrngMsg() {
        return cy.get('#lastname--ErrorMessage');
    }
    getFirstNameFldwrngMsg() {
        return cy.get('#firstname--ErrorMessage');
    }
    getAccountNotFoundwrngMsg() {
        return cy.get('div[data-test="authAlertDisplay"]');
    }

    //---------Functions-----------------------------------

    //Verify Now On Sign In Page.
    verify_OnSignInPage(urlPath) {
        cy.url().should("contain", urlPath)
    }
    verifySignedIn(urlPath) {
        cy.url()
            .should("contain", urlPath)
    }
    //Verify all form elements are visible.
    verify_getEmailFld_Visible() {
        this.getEmailFld().should("be.visible")
    }
    verify_getPasswordFld_Visible() {
        this.getPasswordFld().should("be.visible")
    }
    verify_KeepMeSignedInChkBx_Visible() {
        this.getKeepMeSignedInChkBx().should("be.enabled")
    }
    verify_SignInBtn_Visible() {
        this.getSignInBtn().should("be.visible")
    }
    verify_ForgotPasswordLnk_Visible() {
        this.getForgotPasswordLnk().should("be.visible")
    }
    verify_CreateYourTargetAccountBtn_Visible() {
        this.getCreateYourTargetAccountBtn().should("be.visible")
    }
    // Verify all form elements Attributes.
    verify_EmailFld_Attributes() {
        this.getEmailFld()
            .should("have.attr", "maxlength", "254")
            //.should("have.attr", "minlength", "1")
            .should("have.attr", "type", "text")
        //.should("have.attr", "required")
    }
    verify_PasswordFld_Attributes() {
        this.getPasswordFld()
            .should("have.attr", "maxlength", "20")
            //.should("have.attr", "minlength", "1")
            .should("have.attr", "type", "password")
    }
    verify_KeepMeSignedInChkBx_Attributes() {
        this.getKeepMeSignedInChkBx()
            .should("be.enabled")
    }
    verify_SignInBtn_Attributes(txtSignInBtn) {
        this.getSignInBtn()
            .should("have.text", txtSignInBtn)
    }
    verify_ForgotPasswordLnk_Attributes(txtForgotPasswordLnk) {
        this.getForgotPasswordLnk()
            .should("have.text", txtForgotPasswordLnk)
    }
    verify_CreateYourAccountBtn_Attributes(txtCreateYourAccountBtn) {
        this.getCreateYourTargetAccountBtn()
            .should("have.text", txtCreateYourAccountBtn)
    }
    verify_PasswordShowHideToggle_Functional() {
        const showBtnTxt = "show"
        const hideBtnTxt = "hide"
        const hideSetting = "password"
        const showSetting = "text"

        //validate password field set to password when hide button. (type = password) 
        this.getPasswordFld()
            .invoke('attr', 'type').should('eq', hideSetting)

        this.getShowBtn()
            .should("be.visible")
            .should("have.text", showBtnTxt)
            .click()
        cy.wait(3000)

        this.getHideBtn()
            .should("be.visible")
            .should("have.text", hideBtnTxt)
        cy.wait(3000)

        //validate password field set to text when show button selected. (type = text) 
        this.getPasswordFld()
            .invoke('attr', 'type').should('eq', showSetting)

        this.getHideBtn().click()
        return this
    }
    //Verify user cannot submit a blank form.
    //Verify user cannot log in with an invalid username and password.
    submit_LoginForm() {
        this.getSignInBtn()
            .should("be.visible")
            .click();
        //OR use cy.get('form').submit()
        return this
    }
    //Verify all warning messages display due to Blank Form Submission.
    verify_EmailFldWarningMsg(param1, WrngMsg_EmailFld) {
        const validate = param1
        const message = WrngMsg_EmailFld
        switch (validate) {
            case "visible":
                this.getEmailFldwrngMsg()
                    .should("be.visible")
                    .should("have.text", message)
                break;
            case "invisible":
                this.getEmailFldwrngMsg()
                    .should("not.exist")
        }
    }
    verify_PasswordFldWarningMsg(param1, WrngMsg_PasswordFld) {
        const validate = param1
        const message = WrngMsg_PasswordFld
        switch (validate) {
            case "visible":
                this.getPasswordFldwrngMsg()
                    .should("be.visible")
                    .should("have.text", message)
                break;
            case "invisible":
                this.getPasswordFldwrngMsg()
                    .should("not.exist")
        }
    }
    verify_FirstNameFldWarningMsg(param1, FirstNameFldWarningMsg) {
        const validate = param1
        const message = FirstNameFldWarningMsg
        switch (validate) {
            case "visible":
                this.getFirstNameFldwrngMsg()
                    .should("be.visible")
                    .should("have.text", message)
                break;
            case "invisible":
                this.getFirstNameFldwrngMsg()
                    .should("not.exist")
        }
    }
    verify_LastNameFldWarningMsg(param1, LastNameFldWarningMsg) {
        const validate = param1
        const message = LastNameFldWarningMsg
        switch (validate) {
            case "visible":
                this.getLastNameFldwrngMsg()
                    .should("be.visible")
                    .should("have.text", message)
                break;
            case "invisible":
                this.getLastNameFldwrngMsg()
                    .should("not.exist")
        }
    }
    verify_MobileFldWarningMsg(param1, MobileFldWarningMsg) {
        const validate = param1
        const message = MobileFldWarningMsg
        switch (validate) {
            case "visible":
                this.getMobileFldwrngMsg()
                    .should("be.visible")
                    .should("have.text", message)
                break;
            case "invisible":
                this.getMobileFldwrngMsg()
                    .should("not.exist")
        }
    }
    //Verify required fields highlighted/notHighlighted
    verify_RequiredFldEmail_Highlighted() {
        this.getEmailFld()
            .should("have.class", "Input__StyledInput-sc-1hug1ai-0 koJPr styles__AuthInput-sc-137ce2q-2 hbxLXq")
    }
    verify_RequiredFldPassword_Highlighted() {
        this.getPasswordFld()
            .should("have.class", "Input__StyledInput-sc-1hug1ai-0 koJPr styles__AuthInput-sc-137ce2q-2 hbxLXq")
    }
    verify_RequiredFldEmail_UnHighlighted() {
        this.getEmailFld()
            .should("have.class", "Input__StyledInput-sc-1hug1ai-0 styles__AuthInput-sc-137ce2q-2 hbxLXq")
    }
    verify_RequiredFldPassword_UnHighlighted() {
        this.getPasswordFld()
            .should("have.class", "Input__StyledInput-sc-1hug1ai-0 styles__AuthInput-sc-137ce2q-2 hbxLXq")
    }
    //Verify account not found message appears.
    verify_AccountNotFoundMsg(AcctNotFoundMsg) {
        this.getAccountNotFoundwrngMsg()
            .should('be.visible')
            .should("have.text", AcctNotFoundMsg)
    }
    //Verify warning messages appear when invalid username and password entered.
    set_EmailFld(param1) {
        const text = param1
        this.getEmailFld()
            .should("be.visible")
            .clear()
            .type(text)
            .should("have.value", text)
        cy.clickOutside()
    }
    set_PasswordFld(param2) {
        const text = param2
        this.getPasswordFld()
            .should("be.visible")
            .clear()
            .type(text)
            .should("have.value", text)
        cy.clickOutside()
    }
    setValidateKeepMeSignedInChkbx() {
        const KeepMeSignedInChkbxLbl = "Keep me signed in"
        this.getKeepMeSignedInChkbx()
            .should("be.enabled")
            .check({ force: true })
            .should('be.checked')
            .uncheck({ force: true })
            .should("not.be.checked")
        this.getKeepMeSignedInChkbxLbl()
            .should("have.text", KeepMeSignedInChkbxLbl)
        cy.wait(1000)
        return this
    }
}
export default signIn;