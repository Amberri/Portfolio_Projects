class home{
    //Main Navigation Menu
    //Category
    getMenuCategory() {
        return cy.get('[data-test="@web/Header/MainMenuLink"]').contains("Categories");
    }
    getMenuCategorySublinks() {
        return cy.get('div[data-test="@web/CategoryMenu"] a');
    }
    //Deals
    getMenuDeals() {
        return cy.get('[data-test="@web/Header/MainMenuLink"]').contains("Deals");
    }
    getMenuDealsSublinks(){
        return cy.get('ul[class="styles__ListUl-sc-5oc0g9-4 fdOHeH"] a')
    }
    //Whats'sNew
    getMenuWhatsNew() {
        return cy.get('[data-test="@web/Header/MainMenuLink"]').contains("What’s New");
    }
    getMenuWhatsNewSublinks(){
        return cy.get('ul[class="styles__ListUl-sc-5oc0g9-4 fdOHeH"] a')
    }
    //Pickup Delivery
    getMenuPickupDelivery() {
        return cy.get('a[data-test="@web/PICKUP_AND_DELIVERY_PRIMARY_HEADER_LINK"]').contains("Pickup & Delivery");
    }
    getMenuPickUpDeliverySublinks(){
        return cy.get('ul[class="styles__ListUl-sc-5oc0g9-4 fdOHeH"] a')
    }
    //Utility Menu
    getUtilityMenuSubLinks(){
        return cy.get('div.styles__FlexColumn-sc-cdaur3-0.hMzYLj a')
    }
    //Account Menu and its Link Options
    getAccountMenuBtn() {
        return cy.get('a[data-test="@web/AccountLink"]');
    }
    getAccountMenu_CreateAccountLnk() {
        return cy.get('div[data-test="@web/OverlayModal"] li[id="listaccountNav-createAccount"]');
    }
    getAccountMenu_SignInLnk() {
        return cy.get('div[data-test="@web/OverlayModal"] li[id="listaccountNav-signIn"]');
    }
    getAccountMenuSubLinks(){
      return cy.get('ul.styles__ListUl-sc-5oc0g9-4.fdOHeH a')
    }
    //Search Field
    getSearchFld() {
        return cy.get('form[class = "styles__SearchForm-sc-17dxxwu-12 eclbqb"] input[data-test="@web/Search/SearchInput"]');
    }
    getSearchDDLResults(){
        return cy.get('ul#typeahead li')
        
    }
    //Footer Navigation 
    getFooterContainer() {
        return cy.get('[data-test="@web/component-footer/PrimaryFooter"]');
    }
    getFooterColumnHeaders() {
        return cy.get('[data-test="@web/component-footer/PrimarySection"]');
    }
    getFooterLnks() {
        return cy.get('[data-test="@web/component-footer/PrimaryFooter"] a');
    }
    //Shopping Cart Menu Link
    getMyCartBtn() {
        return cy.get('[data-icon-name="CommerceCart"]');
    } 
    getMyCartBtn() {
        return cy.get('[data-test="@web/Search/SearchInput"]');
    }  
    //-----------------------Functions---------------------------------------
    //Account/Sign In Menu
    openAccountMenu() {
        this.getAccountMenuBtn()
        .should("be.visible")
        .click()
        cy.wait(2000)
        return this
    } 
    clickAccountMenu_CreateAccountLnk() {
       this.getAccountMenu_CreateAccountLnk()
        .should("be.visible")
        .click()
        cy.wait(2000)
        return this
    }
    clickAccountMenu_SignInLink() {
        this.getAccountMenu_SignInLnk()
         .should("be.visible")
         .click()
         cy.wait(2000)
         return this
    }
    verify_AccountMenu_SublinksWork() {
        this.getAccountMenuSubLinks().each(($el, index, $list) => {
            cy.request($el.prop('href'))
        })  
         cy.clickOutside()      
    } 
    //Main Menu 
    click_MenuCategory(){
        this.getMenuCategory()
        .should("be.visible")
        .should('have.text','Categories')
        .click()  
    }
    verify_MenuCategory_SublinksWork(){
        this.getMenuCategorySublinks().each(($el, index, $list) => {
            cy.request($el.prop('href'))
        })   
          cy.clickOutside()    
    }
    click_MenuDeals(){
        this.getMenuDeals()
        .should("be.visible")
        .click()
    }
    verify_MenuDeals_SublinksWork(){
        this.getMenuDealsSublinks().each(($el, index, $list) => {
            cy.request($el.prop('href'))
        })        
        cy.clickOutside()   
    }
    click_MenuWhatsNew(){
        this.getMenuWhatsNew()
        .should("be.visible")
        .click()
    }
    verify_MenuWhatsNew_SublinksWork(){
        this.getMenuWhatsNewSublinks().each(($el, index, $list) => {
            cy.request($el.prop('href'))
        })  
        cy.clickOutside()  
    }
    click_MenuPickUpDelivery(){
        this.getMenuPickupDelivery()
        .should("be.visible")
        .click()
    }
    verify_MenuPickUpDelivery_SublinksWork(){
        this.getMenuPickUpDeliverySublinks().each(($el, index, $list) => {
            cy.request($el.prop('href'))
        })         
        cy.clickOutside()  
    }
    //Utility Menu 
    verify_UtilityLinks(){
        this.getUtilityMenuSubLinks().each(($el, index, $list) => {
            cy.request($el.prop('href'))
        })         
    }
    verify_FooterLinks(){
        this.getFooterLnks().each(($el, index, $list) => {
            cy.request($el.prop('href'))
        })         
        cy.clickOutside()   
    }
    //Search Navigation Menu 
     verify_SearchResultsContainItem(searchItem){
         let Item = searchItem
        this.getSearchFld().type(Item)
        this.getSearchDDLResults().each( getSearchDDLResults => {  
           expect(getSearchDDLResults.text()).to.include(Item)    
        })

       this.getSearchFld().clear()
     }
}
export default new home();