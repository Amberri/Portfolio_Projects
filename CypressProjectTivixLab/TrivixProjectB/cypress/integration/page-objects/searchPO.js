class searchPO {

    //Form Field Gets

    getDDL_CountrySelectedVal() {
        return cy.get('select#country option:selected')
    }

    getDDL_CitySelectedVal() {
        return cy.get('select#city option:selected')
    }

    getDDLL_Country() {
        return cy.get('#country option')
    }

    getDDLL_City() {
        return cy.get('#city option')
    }

    getTXTFLD_Model() {
        return cy.get("input[id='model']");
    }

    getDTPKR_PickUp() {
        return cy.get("#pickup");
    }

    getDTPKR_DropOff() {
        return cy.get("#dropoff");
    }

    getBTN_Search() {
        return cy.get(".btn.btn-primary");
    }

    // Search Results

    getTBL_SearchResult() {
        return cy.get("#search-results");
    }

    getTBL_SearchResult_RentBTN() {
        return cy.get(".btn.btn-success");
    }

    //Warnings/Messages

    getALERT_FillForm() {
        return cy.get(".alert.alert-danger");
    }

    //Form Field Sets

    setDTPKR_PickUp() {
        return cy.get("#pickup");
    }

    setDTPKR_DropOff() {
        return cy.get("#dropoff");
    }

    setDDLL_Country() {
        return cy.get('select#country')
    }

    setDDLL_City() {
        return cy.get('select#city')
    }
   
    //METHODS
    
    //Check Default Values_______________________________________________________________________

    verify_DDLCountry_defaultValue(str){
        this.getDDL_CountrySelectedVal().should("be.visible").should("have.text",str)
       }
    verify_DDLCity_defaultValue(str){
        this.getDDL_CitySelectedVal().should("be.visible").should("have.text",str)
    }
       
    verify_DDLCountry_Values() {
        this.getDDLL_Country().should("be.visible")
        this.getDDLL_Country().then(options => {
            const actual = [...options].map(o => o.innerText)
            expect(actual).to.deep.eq(['France', 'Germany', 'Poland'])
            })
        return this
    }

    verify_DDLCity_Values() {
        this.getDDLL_City().should("be.visible")
        this.getDDLL_City().then(options => {
            const actual = [...options].map(o => o.innerText)
            expect(actual).to.deep.eq(['Berlin', 'Cracow', 'Paris', 'Wroclaw'])
            })
        return this
    }

    verify_TXTFLDModel_Values(str) {
        this.getTXTFLD_Model()
            .should("be.visible")
            .should("have.attr", "placeholder", str)
        return this
    }

    verify_DTPKRPickUp_Values() {
        this.getDTPKR_PickUp()
            .should("be.visible")
            .should("have.attr", "type", "date")
        return this
    }

    verify_DTPKRDropOff_Values() {
        this.getDTPKR_DropOff()
            .should("be.visible")
            .should("have.attr", "type", "date")
        return this
    }

    verify_getALERTFillForm_Values(strMesg) {
        this.getALERT_FillForm()
            .should("be.visible")
            .should("have.text", strMesg)
        return this
    } 
    
    //Set Form Fields _______________________________________________________________________
   
    set_DDLCountry(val){
        this.setDDLL_Country().select(val) //Poland
        .should("have.value","1")  
        return this 
    }

    set_DDLCity(val){
        this.setDDLL_City().select(val) //Paris
        .should("have.value","4")  
        return this 
    }

    set_TXTFLDModel(strModel){
        this.getTXTFLD_Model()
        .type("Toyota")
        .should("have.value",strModel)
        return this
    }

    set_DTPKRPickUp(date){
        const d = date
        this.getDTPKR_PickUp().click()
        this.getDTPKR_PickUp()
        .type(d)
        .should("have.value",d)
        return this
    }

    set_DTPKRDropOff(date){
        const d = date
        this.getDTPKR_DropOff().click()
        this.getDTPKR_DropOff()
        .type(d)
        .should("have.value",d)
        return this
    }

    submit_Form(){
        this.getBTN_Search().click()
    }

    verify_ResultsDisplay(){
        this.getTBL_SearchResult()
        .should("be.visible")
    }

    verify_ResultsValid(){
        this.getTBL_SearchResult().get("tr td:nth-child(4)").each(($el, index, $list) => {
            const carModelResult = $el.text();
            expect(carModelResult).to.contain('Toyota');
        })   

    }

    verify_ResultsDetailLinkActive(){
        this.getTBL_SearchResult().get("tr td:nth-child(7) a").each(($el, index, $list) => {
            cy.request($el.prop('href'))
        })   
    }
   
    navigateToDetailPage(i){ 
        cy.wait(8000)
        const index=i
        
        this.getTBL_SearchResult().get("tr td:nth-child(7) a").eq(index).click({force:true});
        cy.wait(4000)

       
      }
}
export default new searchPO; 