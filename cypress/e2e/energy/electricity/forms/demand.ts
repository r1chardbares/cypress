/**
 * Function which fill and test Electricity Demand step.
 */
import {formatPhoneNumber} from "../../../../../helpers/stringHelper";

export const testAndFillDemandStep = (forms) => {
    cy.contains("Objednávka");
    cy.contains("Rádi vám pomůžeme");
    cy.contains(" s přechodem k novému dodavateli. Stačí když nám na sebe necháte kontakt.");
    cy.contains("Vaše kontaktní údaje");
    cy.getElementByName("firstName").fill(forms.firstName);
    cy.getElementByName("lastName").fill(forms.lastName);
    cy.getElementByName("phoneNumber").should(
        'have.value', formatPhoneNumber(forms.phoneNumber));
    cy.buttonClick("Odeslat objednávku");
};