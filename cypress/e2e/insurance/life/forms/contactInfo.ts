/**
 * Function which fill and test Life contact information wizard step.
 * @param data
 * @param email
 */
export const fillAndTestContactInfo = (data) => {
  cy.getElementByName("name").fill(data.name);
  cy.getElementByName("surname").fill(data.surname);
  cy.getElementByName("phoneNumber").fill(data.phoneNumber);
  cy.getElementByName("email").fill(data.email);
  cy.forceClick("agree");
  cy.forceClick("automaticInformationProcessing");
  cy.buttonClick("Pokračovat");
};
