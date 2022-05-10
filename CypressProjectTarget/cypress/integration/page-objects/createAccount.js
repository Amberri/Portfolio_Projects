
import signIn from "./signIn";
class createAccount extends signIn {

  getFirstNameFld() {
    return cy.get('#firstname');
  }
  getLastNameFld() {
    return cy.get('#lastname');
  }
  getMobileFld() {
    return cy.get('#phone');
  }
  getPasswordFldWrapper() {
    return cy.get('div.InputWrapper-sc-1sbail6-0.bczaCS');
  }
  getShowBtn() {
    return cy.get('button').contains('show');
  }
  getHideBtn() {
    return cy.get('button').contains('hide');
  }
  getCreateAccountBtn() {
    return cy.get('button[id="createAccount"]');
  }
  getKeepMeSignedInChkbx() {
    return cy.get('#keepMeSignedIn');
  }
  getKeepMeSignedInChkbxLbl() {
    return cy.get('label[for="keepMeSignedIn"] > span:nth-child(2) span:nth-child(1)').eq(0);
  }
  //Create Account Form - Error/Messages
  getEmailFldWrngMsg() {
    return cy.get('#username--ErrorMessage');
  }
  getFirstNameFldWrngMsg() {
    return cy.get('#firstname--ErrorMessage');
  }
  getLastNameFldWrngMsg() {
    return cy.get('#lastname--ErrorMessage');
  }
  getPasswordFldWrngMsg() {
    return cy.get('#password--ErrorMessage');
  }
  //Create Account Form - Password Requirements Reminder
  getPasswordFldWrngMsg1of7() {
    return cy.get('div.PasswordRequirements__RequirementTitle-sc-935117-0.jenvlS').eq(0);
  }
  getPasswordFldWrngMsg2of7() {
    return cy.get("li[data-test='lengthNotMet'] > span > span");
  }
  getPasswordFldWrngMsg3of7() {
    return cy.get('div.PasswordRequirements__RequirementTitle-sc-935117-0.jenvlS').eq(1);
  }
  getPasswordFldWrngMsg4of7() {
    return cy.get("li[data-test='lowerCaseNotMet']  > span > span")
  }
  getPasswordFldWrngMsg5of7() {
    return cy.get("li[data-test='upperCaseNotMet']  > span > span")
  }
  getPasswordFldWrngMsg6of7() {
    return cy.get("li[data-test='numberNotMet']  > span > span")
  }
  getPasswordFldWrngMsg7of7() {
    return cy.get("li[data-test='specialCharNotMet']  > span > span")
  }
  getPasswordFldOkyMsg() {
    return cy.get('span [data-icon-name="NavigationCheckCircle"]');
  }
  getValidPasswordConfirmationTxt() {
    return cy.get(".PasswordRequirements__RequirementListItemDone-sc-935117-2.eXkvoL > span").eq(1);
  }
  getCurrentPageURL() {
    const getUrl = ""
    cy.url().then(url => {
      const getUrl = url
      cy.log('Current URL is : ' + getUrl)
    })
    return getUrl
  }
  verify_OnCreateAccountPage(urlPath) {
    cy.url().should('contain', urlPath)
    return this
  }
  //Verify all form elements are visible.
  verify_getFirstNameFld_Visible() {
    this.getFirstNameFld().should("be.visible")
  }
  verify_getLastNameFld_Visible() {
    this.getLastNameFld().should("be.visible")
  }
  verify_getMobileFld_Visible() {
    this.getMobileFld().should("be.visible")
  }
  //Verify all form element attributes.
  verify_getFirstNameFld_Attributes() {
    this.getFirstNameFld()
      .should("have.attr", "maxlength", "40")
      .should("have.attr", "minlength", "5")
      .should("have.attr", "type", "text")
  }
  verify_getLastNameFld_Attributes() {
    this.getLastNameFld()
      .should("have.attr", "maxlength", "40")
      .should("have.attr", "minlength", "5")
      .should("have.attr", "type", "text")
  }
  verify_getMobileFld_Attributes() {
    this.getMobileFld()
      .should("have.attr", "maxlength", "14")
      .should("have.attr", "type", "tel")
  }
  //Verify all reguired fields highlighted
  verify_RequiredFldEmail_Highlighted() {
    this.getEmailFld()
      .should("have.class", "Input__StyledInput-sc-1hug1ai-0 koJPr styles__GspInput-sc-111kqpe-2 bIcdjY")
  }
  verify_RequiredFldFirstName_Highlighted() {
    this.getFirstNameFld()
      .should("have.class", "Input__StyledInput-sc-1hug1ai-0 koJPr styles__GspInput-sc-111kqpe-2 bIcdjY")
  }
  verify_RequiredFldLastName_Highlighted() {
    this.getLastNameFld()
      .should("have.class", "Input__StyledInput-sc-1hug1ai-0 koJPr styles__GspInput-sc-111kqpe-2 bIcdjY")
  }
  verify_RequiredFldMobile_Highlighted() {
    this.getMobileFld()
      .should("have.class", "Input__StyledInput-sc-1hug1ai-0 koJPr")
  }
  verify_RequiredFldPassword_Highlighted() {
    this.getPasswordFld()
      .should("have.class", "Input__StyledInput-sc-1hug1ai-0")
  }
  //Warning Messages
  verify_WarningMessagesDisplay(emailWarningMsg, firstNameFldWrngMsg, lastNameFldWrngMsg) {
    this.getEmailFldWrngMsg()
      .should("be.visible")
      .should("have.text", emailWarningMsg)
    this.getFirstNameFldWrngMsg()
      .should("be.visible")
      .should("have.text", firstNameFldWrngMsg)
    this.getLastNameFldWrngMsg()
      .should("be.visible")
      .should("have.text", lastNameFldWrngMsg)
    this.getPasswordFldwrngMsg()
      .should("be.visible")
      .should("have.text", PasswordFldWrngMsg)
    return this
  }
  verify_PasswordReqrmntsAppear() {
    const PasswordFldWrngMsg1of7 = "Must contain:"
    const PasswordFldWrngMsg2of7 = '8-20 characters'
    const PasswordFldWrngMsg3of7 = 'And 2 of the following:'
    const PasswordFldWrngMsg4of7 = 'Lowercase letters'
    const PasswordFldWrngMsg5of7 = 'Uppercase letters'
    const PasswordFldWrngMsg6of7 = 'Numbers'
    const PasswordFldWrngMsg7of7 = 'Special characters, except < >'

    this.getPasswordFld()
      .type('{enter}')
    this.getPasswordFldWrngMsg1of7()
      .should("be.visible")
      .should('have.text', PasswordFldWrngMsg1of7)
    this.getPasswordFldWrngMsg2of7()
      .should("be.visible")
      .should('have.text', PasswordFldWrngMsg2of7)
    this.getPasswordFldWrngMsg3of7()
      .should("be.visible")
      .should('have.text', PasswordFldWrngMsg3of7)
    this.getPasswordFldWrngMsg4of7()
      .should("be.visible")
      .should('have.text', PasswordFldWrngMsg4of7)
    this.getPasswordFldWrngMsg5of7()
      .should("be.visible")
      .should('have.text', PasswordFldWrngMsg5of7)
    this.getPasswordFldWrngMsg6of7()
      .should("be.visible")
      .should('have.text', PasswordFldWrngMsg6of7)
    this.getPasswordFldWrngMsg7of7()
      .should("be.visible")
      .should('have.text', PasswordFldWrngMsg7of7)
  }
  set_FirstNameFld(firstname) {
    this.getFirstNameFld()
      .should("be.visible")
      .clear()
      .type(firstname)
      .should("have.value", firstname)
    cy.clickOutside()
    cy.wait(2000)
    return this
  }
  set_LastNameFld(lastname) {
    this.getLastNameFld()
      .should("be.visible")
      .clear()
      .type(lastname)
      .should("have.value", lastname)
    cy.clickOutside()
    cy.wait(2000)
    return this
  }
  set_MobileFld(mobile) {
    const m = mobile
    this.getMobileFld()
      .should("be.visible")
      .clear()
      .type(m)
      .invoke('val').then(sometext => {
        var text = sometext.replace(/\D+/g, '')
        expect(text).to.equal(m)
        cy.log(text)
      });
    cy.wait(3000)
    cy.clickOutside()
    return this
  }
  set_PasswordFld(password) {
    this.getPasswordFld()
      .should("be.visible")
      .clear()
      .type(password)
      .should("have.value", password)
    cy.wait(1000)
    cy.clickOutside()
    return this
  }
  submit_CreateAccountForm() {
    //getCreateAccountBtn().should("be.visible").click(); 
    cy.get('form').submit()
    return this
  }
}
export default createAccount;