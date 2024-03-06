/**
 * Function which fill and test Life health status wizard step.
 * @param data
 */
export const fillAndTestHealthStatus = (data) => {
  cy.contains("Zdravotní údaje");
  cy.getElementByName("height").fill(data.height);
  cy.getElementByName("weight").fill(data.weight);
  cy.getElementByName("birthYear").fill(data.birthYear);
  cy.contains("Pobíráte invalidní důchod?");
  cy.get(`input[name=disabilityPension][value=${data.disabilityPension}]`).click();
  if (data.disabilityPension) {
    cy.openSelectMenu("disabilityPensionDegree");
    cy.contains(data.disabilityPensionDegree).click({force: true});
  }
  cy.buttonClick("Pokračovat");
};
