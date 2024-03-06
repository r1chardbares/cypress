/**
 * Function which fill and test Electricity Additional Information step.
 */
import {formatPhoneNumber, formatZipCode} from "../../../../../helpers/stringHelper";
import {Providers} from "../../../../enums/providers";

export  const testAndFillAdditionalInformationStep = (forms) => {
    cy.contains("Údaje o odběrném místě");
    cy.contains(forms.currentElectricityProvider);
    cy.getElementByName("electricityConsumptionPointEan")
        .type(forms.electricityConsumptionPointEan);
    cy.contains("Zkontrolujte hodnotu jističe");
    cy.get(`input[data-testid="circuitBreakerConnectionType"][value=${forms.circuitBreakerConnectionType}]`)
        .should('have.attr', 'checked');
    cy.getElementByName("circuitBreakerValue")
        .should('have.value', forms.circuitBreakerValue);
    cy.contains("Adresa odběrného místa");
    cy.getElementByName("consumptionPointAddressStreet").fill(forms.consumptionPointAddressStreet);
    cy.getElementByName("consumptionPointAddressCity").fill(forms.consumptionPointAddressCity);
    cy.getElementByName("consumptionPointAddressZipCode")
        .should('have.value', formatZipCode(forms.consumptionPointZipCode));
    if(!forms.consumptionPointAddressApartmentHasNoNumber) {
        cy.getElementByName("consumptionPointAddressApartmentNumber")
            .fill(forms.consumptionPointAddressApartmentNumber);
    }
    cy.contains("Údaje o odběrateli");
    cy.getElementByName("firstName").fill(forms.firstName);
    cy.getElementByName("lastName").fill(forms.lastName);
    if((forms.provider === Providers.YELLO) ||
        (forms.provider === Providers.INNOGY) ||
        (forms.provider === Providers.MND)) {
        cy.getElementByName("birthDate").fill(forms.birthDate);
    } else if (forms.provider === Providers.CENTROPOL) {
        cy.getElementByName("birthNumber").fill(forms.birthNumber);
    }
    cy.getElementByName("phoneNumber").should('have.value', formatPhoneNumber(forms.phoneNumber));
    if(!forms.consumptionPointAddressSameAsPermanent) {
        cy.setCheckbox("consumptionPointAddressSameAsPermanent", false);
        cy.contains("Adresa trvalého bydliště");
        cy.getElementByName("permanentAddressStreet").fill(forms.permanentAddressStreet);
        cy.getElementByName("permanentAddressCity").fill(forms.permanentAddressCity);
        cy.getElementByName("permanentAddressZipCode").fill(forms.permanentAddressZipCode);
    }
    if(!forms.deliveryAddressSameAsPermanent) {
        cy.setCheckbox("deliveryAddressSameAsPermanent", forms.deliveryAddressSameAsPermanent);
        cy.contains("Korespondenční adresa");
        cy.getElementByName("deliveryAddressStreet").fill(forms.deliveryAddressStreet);
        cy.getElementByName("deliveryAddressCity").fill(forms.deliveryAddressCity);
        cy.getElementByName("deliveryAddressZipCode").fill(forms.deliveryAddressZipCode);
    }
    cy.buttonClick("Pokračovat");
};