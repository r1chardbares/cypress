
export const testOffersForm = (forms) => {
    cy.contains("Nabídky dodavatelů elektřiny");

    cy.getElementByName(`order-button-provider-${forms.provider}`).click();
};