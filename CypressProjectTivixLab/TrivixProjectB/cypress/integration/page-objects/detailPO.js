class detailPO{

//Summary Card

    getCRD_Model() {
        return cy.get(".card-header");
    }

    getCRD_Company() {
        return cy.get(".card-title");
    }

    getCRD_Price() {
        return cy.get("div.card-body p.card-text:nth-child(2)");
    }

    getCRD_Location() {
        return cy.get("div.card-body").contains("Price per day:", { matchCase: false });
    }

    getCRD_License() {
        return cy.get("p.card-text").contains("License plate:", { matchCase: false });
    }

    getCRD_PickUpDate() {
        return cy.get("h6").contains("Pickup date:", { matchCase: false });
    }

    getCRD_DropOffDate() {
        return cy.get("h6").contains("Dropoff date:", { matchCase: false });
    }

    getCRD_RentBTN() {
        return cy.get(".btn.btn-primary");
    }

//Methods ---------------------------------------------------------------------------------------

  verify_DetailsPageResultsMatchCarSelected(){
        expect(carModelResult).to.contain('Toyota');
        expect(carModelResult).to.contain('Toyota');
        expect(carModelResult).to.contain('Toyota');
        expect(carModelResult).to.contain('Toyota');
  }

  navigateToBookingPage(i){
    this.getCRD_RentBTN()
  }

}

export default new detailPO();