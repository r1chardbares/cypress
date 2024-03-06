/**
 * Function which fill and test Life health status wizard step.
 * @param data
 */
export const fillAndTestDiscounts = (data) => {
  cy.getElementByName("birthNumber").fill(data.birthNumber);
  cy.openSelectMenu("occupation");
  cy.contains(data.occupation).click({force: true});
  cy.contains("Sportujete?");
  cy.setRadioButton("isSporting", data.isSporting);
  if (data.isSporting) {
    cy.openSelectMenu("sports.0.type").type(`${data.sport[0]}{enter}`);
    cy.openSelectMenu("sports.0.level");
    cy.contains(data.sportLevel[0]).click({force: true});
    if ((data.sport.length > 1) && (data.sportLevel.length > 1)) {
      for (let i=1; i<data.sport.length; i++) {
        cy.contains("Přidat další").click();
        cy.openSelectMenu(
            `sports.${i}.type`).type(`${data.sport[i]}{enter}`);
        cy.openSelectMenu(`sports.${i}.level`);
        cy.contains(data.sportLevel[i]).click({force: true});
      }
    }
  }
  cy.contains("Léčíte se dlouhodobě s něčím?");
  cy.setRadioButton("longTermTreatment", data.longTermTreatment);
  if (data.longTermTreatment) {
    cy.getElementByName("longTermTreatedIllness").fill(data.longTermTreatedIllness);
  }
  cy.contains("Berete pravidelně léky?");
  cy.setRadioButton("regularMedicaments", data.regularMedicaments);
  if (data.regularMedicaments) {
    cy.getElementByName("regularMedicamentsDescription")
        .fill(data.regularMedicamentsDescription);
  }
  cy.contains("Byl jste někdy v posledních 7 letech v pracovní neschopnosti déle než 14 dní?")
  cy.setRadioButton("longIncapacityInLastSevenYears", data.longIncapacityInLastSevenYears);
  if (data.longIncapacityInLastSevenYears) {
    cy.getElementByName("longIncapacityInLastSevenYearsDescription")
        .fill(data.longIncapacityInLastSevenYearsDescription);
  }
  cy.contains("Jste momentálně v pracovní neschopnosti?");
  cy.setRadioButton("incapacity", data.incapacity);
  cy.contains("Kouříte?");
  cy.contains("Včetně elektronických cigaret");
  cy.setRadioButton("smoker", data.smoker);
  if (data.smoker) {
    cy.getElementByName("cigarettesPerDay").fill(data.cigarettesPerDay);
  }
  if (data?.note) {
    cy.contains("Chci něco doplnit").click();
    cy.getElementByName("note").fill(data.note);
  }
  cy.buttonClick("Zobrazit nabídky");
};









