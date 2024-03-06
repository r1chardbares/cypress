/**
 * Function which fill and test Life basic information wizard step.
 * @param data
 */

export const fillAndTestBasicInformation = (data) => {
  cy.contains("Srovnejte si ceny životního pojištění");
  cy.contains("Jaké je vaše zaměstnání");
  cy.setRadioButton("workType", data.workType);

  if(data.workType==="EMPLOYMENT") {
    cy.contains("V jakém odvětví pracujete?");
    cy.setRadioButton("occupationType", data.occupationType);
  }
  else if(data.workType==="ENTREPRENEUR") {
    cy.contains("V jakém odvětví pracujete?");
    cy.setRadioButton("occupationType", data.occupationType);
    cy.contains("Platíte si nemocenské pojištění?");
    cy.setRadioButton("sicknessInsurance", data.sicknessInsurance);
  }
  else if(data.workType==="UNEMPLOYED") {
    cy.contains("Vyberte prosím jednu z možností");
    cy.openSelectMenu("unemploymentTypeId");
    cy.contains(data.unemploymentType).click();
  }
  cy.setRadioButton("citizenship", data.citizenship).click();
  cy.buttonClick("Pokračovat");
};

