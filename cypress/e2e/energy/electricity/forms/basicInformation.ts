/**
 * Function which fill and test Electricity Basic Information wizard step.
 */

export const testAndFillElectricityBasicInformationStep = (forms) => {
    cy.contains("Elektřina");
    cy.contains("Základní údaje");
    cy.contains("Kde se nachází odběrné místo?");
    cy.getElementByName("consumptionPointZipCode")
        .fill(forms.consumptionPointZipCode);
    cy.contains("Kdo je váš stávající dodavatel");
    cy.openSelectMenuAndSelectValue(
        "currentElectricityProvider", forms.currentElectricityProvider, forms.isFirstProvider
    )
    cy.contains("Na co doma využíváte elektřinu?");
    if(!forms.electricityUsage.includes("lights")) {
        cy.setCheckbox("lights", false)
    }
    forms.electricityUsage.forEach((item) => {
       cy.setCheckbox(`${item}`, true);
    });
    if (forms.electricHeatingTypes?.length > 0) {
        forms.electricHeatingTypes.forEach((item) => {
            cy.setCheckbox(`${item}`, true);
        });
    }
    cy.contains("Dokud nepotvrdíte registraci do služby RIXO na konci tohoto procesu, žádné údaje nezískáváme - odeslány jsou až tlačítkem \"Ukázat nabídky\".");
    cy.contains("Společnost RIXO.cz je ");
    cy.contains("zprostředkovatel energií.");
    cy.buttonClick("Pokračovat");
};


