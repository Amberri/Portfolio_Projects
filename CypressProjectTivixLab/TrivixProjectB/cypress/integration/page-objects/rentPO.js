class rentPO{

//Form Fields

    getTXTFLD_Name() {
        return cy.get("#name");
    }

    getTXTFLD_LastName() {
        return cy.get("#last_name");
    }

    getTXTFLD_CardNumber() {
        return cy.get("#card_number");
    }

    getTXTFLD_Email() {
        return cy.get("#email");
    }

    getBTN_Rent() {
        return cy.get("#.btn.btn-primary");
    }

//Warnings/Messages

    //Required Fields
    getALERT_Name_Required() {
        return cy.get(".alert.alert-danger").contains("Name is required", { matchCase: false });
    }

    getALERT_LastName_Required() {
        return cy.get(".alert.alert-danger").contains("Last name is required", { matchCase: false });
    }

    getALERT_Email_Required() {
        return cy.get(".alert.alert-danger").contains("Email is required", { matchCase: false });
    }

    getALERT_CardNumber_Required() {
        return cy.get(".alert.alert-danger").contains("Card number is required", { matchCase: false });
    }

    //Invalid Input
    getALERT_Email_Invalid() {
        return cy.get(".alert.alert-danger").contains("Please provide valid email", { matchCase: false });
    }

    getALERT_Name_Invalid() {
        return cy.get(".alert.alert-danger").contains("Card number contains wrong chars", { matchCase: false });
    }

//Summary Card

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

}
export default new rentPO; 