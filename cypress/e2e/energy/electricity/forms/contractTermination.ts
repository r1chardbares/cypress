/**
 * Function which fill and test Electricity Yello contract termination.
 */

export const testAndFillContractTerminationStep = (forms) => {
    cy.contains("Výpověď stávající smlouvy");
    cy.contains("Na závěr si potvrdíme jak budete ");
    cy.contains("vypovídat stávající smlouvu");
    cy.contains("Chcete abychom zařídili výpověď u stávajícího dodavatele?");
    cy.setRadioButton("providerTerminatesCurrentContract", forms.providerTerminatesCurrentContract);
    cy.contains("Na jakou dobu máte uzavřenou smlouvu u stávajícího dodavatele?");
    cy.setRadioButton("currentElectricityContractIndefinite",
        forms.currentElectricityContractIndefinite);
    cy.contains("Vypovídáte z důvodu navýšení ceny?");
    cy.setRadioButton("priceIncrease", forms.priceIncrease);
    if((forms.currentElectricityContractIndefinite === false) && (forms.priceIncrease === true)) {
        cy.contains("Dodavatel vám zvýšil cenu v průběhu závazku nebo až do dalšího období?");
        cy.setRadioButton("increaseInOngoingContract", forms.increaseInOngoingContract);
        if(forms.increaseInOngoingContract === false) {
            cy.contains("Kdy vám končí stávající smlouva?");
            cy.getElementByName("currentElectricityContractEndDate")
                .type(forms.currentElectricityContractEndDate);
        }else {
            cy.contains("Od kdy bude platit nový ceník?");
            cy.getElementByName("newPriceListBeginDate").type(forms.newPriceListBeginDate);
        }
    }else if((forms.currentElectricityContractIndefinite === false) && (forms.priceIncrease === false)) {
        cy.contains("Kdy vám končí stávající smlouva?");
        cy.getElementByName("currentElectricityContractEndDate")
            .type(forms.currentElectricityContractEndDate);
    }else if((forms.currentElectricityContractIndefinite === true) && (forms.priceIncrease === true)) {
        cy.contains("Od kdy bude platit nový ceník?");
        cy.getElementByName("newPriceListBeginDate").type(forms.newPriceListBeginDate);
    }
    cy.get("body").click(0,0); // To hide datePicker
    cy.buttonClick("Pokračovat");
};