import {
  lifeInputData,
  lifeClientPreregisteredData,
  lifeClientUpdateData,
  lifeFullWizardInputData,
  lifeFullWizardPreregisteredData,
  lifeFullWizardUpdateData,
} from "./data/data.client";
import { emails } from "../../public/emails";
import {
  testLifeWizard,
  testLifeWizardActiveClient,
  testLifeWizardNotConfirmedClient,
} from "./wizard/clientWizard";

describe("Life - client public request", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/*/*/*/*").as("sportsEnum");
    cy.intercept("GET", "**/*/*/*/*").as("occupationsEnum");
    cy.intercept("GET", "**/*/*/*/*-*").as("unemploymentTypesEnum");
    cy.intercept("POST", "**/*/*-*").as("service-request");
    cy.intercept("PUT", "**/*/*-*/**").as("final");
    cy.intercept("GET", "**/*/*/*/**").as("registration-data");
  });

  it("Preregistered client", () => {
    testLifeWizard(
      lifeInputData,
      lifeClientPreregisteredData,
      lifeClientUpdateData,
    );
  });

  it("Active client", () => {
    testLifeWizardActiveClient(
      lifeFullWizardInputData,
      lifeFullWizardPreregisteredData(emails.ACTIVE, false),
      lifeFullWizardUpdateData,
    );
  });

  it("Not confirmed client", () => {
    const inputData = { ...lifeInputData, email: emails.NOT_CONFIRMED };
    testLifeWizardNotConfirmedClient(inputData);
  });
});
