import {
  electricityExactConsumptionInputData,
  electricityEstimateConsumptionApartmentInputData,
  electricityExactConsumptionServiceRequestData,
  electricityEstimateConsumptionApartmentServiceRequestData,
} from "./data/data";

import {
  testElectricityEstimateKnownConsumption,
  testElectricityExactKnownConsumption,
} from "./wizard/clientWizard";

describe("Electricity - Public Request", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/*/*/*/*/*-*").as("electricity-providers");
    cy.intercept("GET", "**/*/*/*/*-*-*").as("circuit-breaker-types");
    cy.intercept("GET", "**/*/*/*/*-*-*").as("electricity-distribution-rates");
    cy.intercept("POST", "***/*/*/*-*").as("service-request");
  });
  it("Electricity exact consumption", () => {
    testElectricityExactKnownConsumption(
      electricityExactConsumptionInputData,
      electricityExactConsumptionServiceRequestData,
    );
  });
  it("Electricity estimate consumption - Apartment", () => {
    testElectricityEstimateKnownConsumption(
      electricityEstimateConsumptionApartmentInputData,
      electricityEstimateConsumptionApartmentServiceRequestData,
    );
  });
});
