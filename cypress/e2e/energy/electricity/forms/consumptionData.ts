/**
 * Function which fill and test Electricity Exact Consumption Data wizard step.
 */
import { TriggerDirection } from "../../../../support/commands";
import { DistributionRate } from "../../../../enums/distributionRate";
import { ConsumptionPointObjectType } from "../../../../enums/consumptionPointObjectType";

export const testAndFillElectricityExactConsumptionDataStep = (forms) => {
  cy.contains("Elektřina");
  cy.contains("Údaje o spotřebě");
  cy.contains("Víte přesnou spotřebu z posledního vyúčtování?");
  cy.setRadioButton(
    "exactElectricityConsumptionKnown",
    forms.exactElectricityConsumptionKnown
  );
  cy.contains("Údaje najdete na vašem posledním vyúčtování");
  cy.contains("Distribuční sazba a jistič");
  cy.openSelectMenu("electricityDistributionRate");
  cy.contains(forms.electricityDistributionRate).click({ force: true });
  cy.openSelectMenu("circuitBreakerType");
  cy.contains(forms.circuitBreakerType).click({ force: true });
  cy.contains("Roční spotřeba");
  cy.getElementByName("yearlyElectricityConsumptionInHighTariff").fill(
    forms.yearlyElectricityConsumptionInHighTariff
  );
  if (
    ![DistributionRate.D01D, DistributionRate.D02D].includes(
      forms.electricityDistributionRate
    )
  ) {
    cy.getElementByName("yearlyElectricityConsumptionInLowTariff").fill(
      forms.yearlyElectricityConsumptionInLowTariff
    );
  }
  cy.contains("Kontaktní údaje");
  cy.getElementByName("phoneNumber").fill(forms.phoneNumber);
  cy.getElementByName("email").fill(forms.email);
  cy.getElementByName("automaticInformationProcessing").click({ force: true });
  cy.buttonClick("Ukázat nabídky");
};

/**
 * Function which fill and test Electricity Estimate Consumption Data wizard step.
 */
export const testAndFillElectricityEstimateConsumptionDataStep = (forms) => {
  cy.contains("Elektřina");
  cy.contains("Údaje o spotřebě");
  cy.contains("Víte přesnou spotřebu z posledního vyúčtování?");
  cy.setRadioButton(
    "exactElectricityConsumptionKnown",
    forms.exactElectricityConsumptionKnown
  );
  cy.contains("Nevadí, zkusíme spotřebu dát společně dohromady");
  cy.contains("Kde se odběrné místo nachází?");
  cy.setRadioButton(
    "consumptionPointObjectType",
    forms.consumptionPointObjectType
  );
  if (
    forms.electricityUsage.includes("heating") &&
    (forms.consumptionPointObjectType ===
      ConsumptionPointObjectType.APARTMENT ||
      forms.consumptionPointObjectType ===
        ConsumptionPointObjectType.HOUSE_PERMANENTLY_INHABITED)
  ) {
    cy.contains("Jaká je energetická náročnost domu?");
    cy.setRadioButton(
      "consumptionPointObjectEnergyIntensity",
      forms.consumptionPointObjectEnergyIntensity
    );
  }
  if (
    forms.consumptionPointObjectType === ConsumptionPointObjectType.APARTMENT ||
    forms.consumptionPointObjectType ===
      ConsumptionPointObjectType.HOUSE_PERMANENTLY_INHABITED
  ) {
    cy.contains("Kolik lidí žije v domácnosti?");
    cy.setTrigger(
      "rc-handle-householdEnergyUsersCount",
      TriggerDirection.RIGHT,
      1
    );
    cy.contains("Jak moc je domácnost v průběhu celého dne využívaná?");
    cy.setTrigger("rc-handle-dailyEnergyUsageLevel", TriggerDirection.RIGHT, 1);
  }
  if (forms.consumptionPointObjectType !== ConsumptionPointObjectType.OTHER) {
    cy.contains("Svítíte převážně LED žárovkami?");
    cy.setRadioButton("mostlyLedLightsField", forms.mostlyLedLightsField);
    cy.contains("Využíváte převážně nové elektrospotřebiče? (mladší 5 let)");
    cy.setRadioButton(
      "mostlyNewElectricalDevicesUsedField",
      forms.mostlyNewElectricalDevicesUsedField
    );
  }
  cy.contains("Kontaktní údaje");
  cy.getElementByName("phoneNumber").fill(forms.phoneNumber);
  cy.getElementByName("email").fill(forms.email);
  cy.getElementByName("automaticInformationProcessing").click({ force: true });
  cy.buttonClick("Ukázat nabídky");
};
