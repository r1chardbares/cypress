import {
  electricityCentropolConsumptionInputData,
  electricityCentropolConsumptionServiceRequestData,
  electricityCentropolOrderInputData,
  electricityCentropolOrderRequestArrangementData,
  electricityCentropolOrderRequestArrangementDataWithFiles,
  electricityEonConsumptionInputData,
  electricityEonConsumptionServiceRequestData,
  electricityEonOrderInputData,
  electricityEonOrderRequestArrangementData,
  electricityInnogyConsumptionInputData,
  electricityInnogyConsumptionServiceRequestData,
  electricityInnogyOrderInputData,
  electricityInnogyOrderRequestArrangementData,
  electricityInnogyOrderRequestArrangementDataWithFiles,
  electricityMndConsumptionInputData,
  electricityMndConsumptionServiceRequestData,
  electricityMndOrderInputData,
  electricityMndOrderRequestArrangementData,
  electricityMndOrderRequestArrangementDataWithFiles,
  electricityYelloConsumptionInputData,
  electricityYelloConsumptionServiceRequestData,
  electricityYelloOrderInputData,
  electricityYelloOrderRequestArrangementData,
  electricityYelloOrderRequestArrangementDataV2,
  electricityYelloOrderRequestArrangementDataWithFiles,
} from "./data/dataOrder";
import { clientOrderElectricity, clientSendDemand } from "./order/clientOrder";
import { testElectricityExactKnownConsumption } from "./wizard/clientWizard";

describe("Electricity - Public Order", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/*/*/*/*/*-*").as("electricity-providers");
    cy.intercept("GET", "**/*/*/*/*-*-*").as("circuit-breaker-types");
    cy.intercept("GET", "**/*/*/*/*-*-*").as("electricity-distribution-rates");
  });

  it("Public offer with successful automatic order", () => {
    testElectricityExactKnownConsumption(
      electricityYelloConsumptionInputData,
      electricityYelloConsumptionServiceRequestData,
    );
    cy.wait("@feedback", { timeout: 50000 });
    clientOrderElectricity(
      electricityYelloConsumptionInputData,
      electricityYelloOrderInputData,
      electricityYelloOrderRequestArrangementData,
      electricityYelloOrderRequestArrangementDataWithFiles,
      electricityYelloOrderRequestArrangementDataV2,
    );
  });
});
