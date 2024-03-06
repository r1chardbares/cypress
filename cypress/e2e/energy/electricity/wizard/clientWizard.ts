import {ELECTRICITY_URL} from "../../../../enums/paths";
import {testAndFillElectricityBasicInformationStep} from "../forms/basicInformation";
import {
    testAndFillElectricityEstimateConsumptionDataStep,
    testAndFillElectricityExactConsumptionDataStep
} from "../forms/consumptionData";

export const testElectricityExactKnownConsumption = (
    electricityInputData,
    preregisteredData,
) => {
    cy.visit(ELECTRICITY_URL);
    cy.wait("@electricity-providers");
    testAndFillElectricityBasicInformationStep(electricityInputData);
    cy.wait("@circuit-breaker-types");
    cy.wait("@electricity-distribution-rates");
    testAndFillElectricityExactConsumptionDataStep(electricityInputData);
    cy.wait("@service-request").should((interception) => {
        const dataToCheck = {...interception.request.body};
        expect(dataToCheck.data).to.haveOwnProperty
        ("electricityDistributionRate").not.null;
        expect(dataToCheck.data).to.haveOwnProperty
        ("circuitBreakerType").not.null;
        expect(dataToCheck.data).to.haveOwnProperty
        ("currentElectricityProvider").not.null;
        delete dataToCheck.data.electricityDistributionRate;
        delete dataToCheck.data.circuitBreakerType;
        delete dataToCheck.data.currentElectricityProvider;
        expect(dataToCheck).to.deep.include(preregisteredData);
        expect(interception.response.statusCode).to.eq(202);
    })
};

export const testElectricityEstimateKnownConsumption = (
    electricityInputData,
    preregisteredData,
) => {
    cy.visit(ELECTRICITY_URL);
    cy.wait("@electricity-providers");
    testAndFillElectricityBasicInformationStep(electricityInputData);
    cy.wait("@circuit-breaker-types");
    cy.wait("@electricity-distribution-rates");
    testAndFillElectricityEstimateConsumptionDataStep(electricityInputData);
    cy.wait("@service-request").should((interception) => {
        const dataToCheck = {...interception.request.body};
        expect(dataToCheck.data).to.haveOwnProperty
        ("currentElectricityProvider").not.null;
        delete  dataToCheck.data.currentElectricityProvider;
        expect(dataToCheck).to.deep.include(preregisteredData);
        expect(interception.response.statusCode).to.eq(202);
    })
};