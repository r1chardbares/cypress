// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import "cypress-fill-command";
import "cypress-file-upload";

Cypress.Commands.add(
  "buttonClick",
  (buttonLabel: string, forceClick = false) => {
    cy.get("button").contains(buttonLabel).click({ force: forceClick });
  },
);

Cypress.Commands.add("setCheckbox", (checkboxName: string, value: boolean) => {
  const checkbox = cy.get(`input[name="${checkboxName}"]`).first();
  if (value) {
    checkbox.check({ force: true });
  } else {
    checkbox.uncheck({ force: true });
  }
});

Cypress.Commands.add("divParentClick", (divName: string) => {
  cy.get(divName).parent().click();
});

Cypress.Commands.add("forceClick", (name: string) => {
  cy.get(`[name="${name}"]`).first().click({ force: true });
});

Cypress.Commands.add("setRadioButton", (name: string, value: string) => {
  cy.get(`input[name="${name}"][value="${value}"]`)
    .first()
    .click({ force: true });
});

Cypress.Commands.add("getElementByName", (name: string) => {
  cy.get(`[data-testid="${name}"]`).first();
});

Cypress.Commands.add("openSelectMenu", (selectName: string) => {
  cy.get(`[data-testid="select-${selectName}"]`).click();
});

Cypress.Commands.add(
  "openSelectMenuAndSelectValue",
  (fieldName: string, value: string, isFirst = false) => {
    if (isFirst) {
      cy.get(`[data-testid="select-${fieldName}"]`).type("{enter}");
    } else {
      cy.get(`[data-testid="select-${fieldName}"]`).click();
      cy.contains(value).click({ force: true });
    }
  },
);

export enum TriggerDirection {
  LEFT = "'{leftarrow}'",
  RIGHT = "'{rightarrow}'",
}

Cypress.Commands.add(
  "setTrigger",
  (name: string, direction = TriggerDirection.RIGHT, repeatCount = 1) => {
    cy.get(`[data-testid="${name}"]`)
      .first()
      .type(`${direction}`.repeat(repeatCount));
  },
);

Cypress.Commands.add("multipleClick", (name: string, repeatCount: number) => {
  for (let n = 0; n < repeatCount; n++) {
    cy.get(`[data-testid="${name}"]`).click();
  }
});
