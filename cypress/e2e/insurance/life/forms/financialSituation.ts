/**
 * Function which fill and test Life financial situation wizard step.
 * @param data
 */
export const fillAndTestFinancialSituation = (data) => {
  cy.get(
    `input[name=dependentPersons][value=${data.dependentPersons}]`
  ).click();
  cy.getElementByName("monthlyNetIncome").fill(data.monthlyNetIncome);
  cy.getElementByName("monthlyExpenses").fill(data.monthlyExpenses);
  cy.getElementByName("cashReserveValue").fill(data?.cashReserveValue);
  cy.get(`input[name=mortgage][value=${data.mortgage}]`).click();
  cy.contains("Máte hypotéku?");

  if (data.mortgage) {
    cy.get(`input[name=mortgageMoneyLeftToPay]`).fill(data.mortgageMoneyLeftToPay);
    cy.get(`input[name=mortgageAlreadyInsured][value=${data.mortgageAlreadyInsured}]`).click();
  }
  cy.buttonClick("Pokračovat");
};
