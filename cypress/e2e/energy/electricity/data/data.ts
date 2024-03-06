import { emails } from "../../../public/emails"
import {DistributionRate} from "../../../../enums/distributionRate";
import {CircuitBreakerType} from "../../../../enums/circuitBreakerType";
import {ConsumptionPointObjectType} from "../../../../enums/consumptionPointObjectType";
import {EnergyProvider} from "../../../../enums/providers";

export const electricityExactConsumptionInputData = {
    consumptionPointZipCode: "10400",
    electricityUsage: ["lights", "cooking", "heating"],
    electricHeatingTypes: ["boiler"],
    currentElectricityProvider: EnergyProvider.CEZ_PRODEJ,
    isFirstProvider: true,
    exactElectricityConsumptionKnown: true,
    electricityDistributionRate: DistributionRate.D25D,
    circuitBreakerType: CircuitBreakerType.DO_3X25,
    yearlyElectricityConsumptionInHighTariff: "3000",
    yearlyElectricityConsumptionInLowTariff: "5000",
    phoneNumber: "775000000",
    email: emails.PREREGISTERED,
};

export const electricityExactConsumptionServiceRequestData = {
    automaticOffer: true,
    serviceType: "ENERGY",
    energyType: "ELECTRICITY",
    source: "RIXO",
    publicUserIdentification: {
        emailAddress: electricityExactConsumptionInputData.email,
        approvals: {
            AUTOMATIC_INFORMATION_PROCESSING: true,
            BUSINESS_CONDITIONS: true,
            ELECTRONIC_COMMUNICATION: true
        }
    },
    data: {
        consumptionPointZipCode: electricityExactConsumptionInputData.consumptionPointZipCode,
        electricityUsage: electricityExactConsumptionInputData.electricityUsage
            .map((item) => item.toUpperCase()),
        electricHeatingTypes: electricityExactConsumptionInputData.electricHeatingTypes
            .map((item) => item.toUpperCase()),
        exactElectricityConsumptionKnown: electricityExactConsumptionInputData.exactElectricityConsumptionKnown,
        yearlyElectricityConsumptionInHighTariff: electricityExactConsumptionInputData.yearlyElectricityConsumptionInHighTariff,
        yearlyElectricityConsumptionInLowTariff: electricityExactConsumptionInputData.yearlyElectricityConsumptionInLowTariff,
        CLIENT_PHONE_NUMBER: electricityExactConsumptionInputData.phoneNumber,
    }
};

export const electricityEstimateConsumptionApartmentInputData = {
    consumptionPointZipCode: "10400",
    currentElectricityProvider: EnergyProvider.EON,
    isFirstProvider: false,
    electricityUsage: ["lights", "cooking", "waterBoiler", "heating"],
    electricHeatingTypes: ["pump"],
    exactElectricityConsumptionKnown: false,
    consumptionPointObjectType: ConsumptionPointObjectType.APARTMENT,
    consumptionPointObjectEnergyIntensity: "HIGH",
    mostlyLedLightsField: false,
    mostlyNewElectricalDevicesUsedField: false,
    phoneNumber: "775000000",
    email: emails.PREREGISTERED,
};

export const electricityEstimateConsumptionApartmentServiceRequestData = {
    automaticOffer: true,
    serviceType: "ENERGY",
    energyType: "ELECTRICITY",
    source: "RIXO",
    publicUserIdentification: {
        emailAddress: electricityEstimateConsumptionApartmentInputData.email,
        approvals: {
            AUTOMATIC_INFORMATION_PROCESSING: true,
            BUSINESS_CONDITIONS: true,
            ELECTRONIC_COMMUNICATION: true
        }
    },
    data: {
        CLIENT_PHONE_NUMBER: electricityEstimateConsumptionApartmentInputData.phoneNumber,
        consumptionPointObjectEnergyIntensity: electricityEstimateConsumptionApartmentInputData.consumptionPointObjectEnergyIntensity,
        consumptionPointObjectType: electricityEstimateConsumptionApartmentInputData.consumptionPointObjectType,
        consumptionPointZipCode: electricityEstimateConsumptionApartmentInputData.consumptionPointZipCode,
        dailyEnergyUsageLevel: "HIGH",
        electricHeatingTypes: [electricityEstimateConsumptionApartmentInputData.electricHeatingTypes
            .toString().toUpperCase()],
        electricityUsage: electricityEstimateConsumptionApartmentInputData.electricityUsage
            .map((item) => item.toUpperCase().replace('WATERBOILER', 'WATER_BOILER')),
        exactElectricityConsumptionKnown: electricityEstimateConsumptionApartmentInputData.exactElectricityConsumptionKnown,
        householdEnergyUsersCount: "EXACTLY_4",
        mostlyLedLightsField: electricityEstimateConsumptionApartmentInputData.mostlyLedLightsField,
        mostlyNewElectricalDevicesUsedField: electricityEstimateConsumptionApartmentInputData.mostlyNewElectricalDevicesUsedField
    }
};

export const electricityEstimateConsumptionHousePermanentlyInhabitedInputData = {
    consumptionPointZipCode: "39701",
    currentElectricityProvider: EnergyProvider.INNOGY,
    isFirstProvider: false,
    electricityUsage: ["lights", "cooking", "waterBoiler", "heating"],
    electricHeatingTypes: ["pump"],
    exactElectricityConsumptionKnown: false,
    consumptionPointObjectType: ConsumptionPointObjectType.HOUSE_PERMANENTLY_INHABITED,
    consumptionPointObjectEnergyIntensity: "HIGH",
    mostlyLedLightsField: true,
    mostlyNewElectricalDevicesUsedField: true,
    phoneNumber: "775000000",
    email: emails.PREREGISTERED,
};

export const electricityEstimateConsumptionHousePermanentlyInhabitedServiceRequestData = {
    automaticOffer: true,
    serviceType: "ENERGY",
    energyType: "ELECTRICITY",
    source: "RIXO",
    publicUserIdentification: {
        emailAddress: electricityEstimateConsumptionHousePermanentlyInhabitedInputData.email,
        approvals: {
            AUTOMATIC_INFORMATION_PROCESSING: true,
            BUSINESS_CONDITIONS: true,
            ELECTRONIC_COMMUNICATION: true
        }
    },
    data: {
        CLIENT_PHONE_NUMBER: electricityEstimateConsumptionHousePermanentlyInhabitedInputData.phoneNumber,
        consumptionPointObjectEnergyIntensity: electricityEstimateConsumptionHousePermanentlyInhabitedInputData.consumptionPointObjectEnergyIntensity,
        consumptionPointObjectType: electricityEstimateConsumptionHousePermanentlyInhabitedInputData.consumptionPointObjectType,
        consumptionPointZipCode: electricityEstimateConsumptionHousePermanentlyInhabitedInputData.consumptionPointZipCode,
        dailyEnergyUsageLevel: "HIGH",
        electricHeatingTypes: [electricityEstimateConsumptionHousePermanentlyInhabitedInputData.electricHeatingTypes
            .toString().toUpperCase()],
        electricityUsage: electricityEstimateConsumptionHousePermanentlyInhabitedInputData.electricityUsage
            .map((item) => item.toUpperCase().replace('WATERBOILER', 'WATER_BOILER')),
        exactElectricityConsumptionKnown: electricityEstimateConsumptionHousePermanentlyInhabitedInputData.exactElectricityConsumptionKnown,
        householdEnergyUsersCount: "EXACTLY_4",
        mostlyLedLightsField: electricityEstimateConsumptionHousePermanentlyInhabitedInputData.mostlyLedLightsField,
        mostlyNewElectricalDevicesUsedField: electricityEstimateConsumptionHousePermanentlyInhabitedInputData.mostlyNewElectricalDevicesUsedField
    }
};

export const electricityEstimateConsumptionHouseOccasionallyInhabitedInputData = {
    consumptionPointZipCode: "39701",
    currentElectricityProvider: EnergyProvider.CEZ_PRODEJ,
    isFirstProvider: true,
    electricityUsage: ["lights", "cooking", "waterBoiler", "heating"],
    electricHeatingTypes: ["storageHeater"],
    exactElectricityConsumptionKnown: false,
    consumptionPointObjectType: ConsumptionPointObjectType.HOUSE_OCCASIONALLY_INHABITED,
    mostlyLedLightsField: true,
    mostlyNewElectricalDevicesUsedField: false,
    phoneNumber: "775000000",
    email: emails.PREREGISTERED,
};

export const electricityEstimateConsumptionHouseOccasionallyInhabitedServiceRequestData = {
    automaticOffer: true,
    serviceType: "ENERGY",
    energyType: "ELECTRICITY",
    source: "RIXO",
    publicUserIdentification: {
        emailAddress: electricityEstimateConsumptionHouseOccasionallyInhabitedInputData.email,
        approvals: {
            AUTOMATIC_INFORMATION_PROCESSING: true,
            BUSINESS_CONDITIONS: true,
            ELECTRONIC_COMMUNICATION: true
        }
    },
    data: {
        CLIENT_PHONE_NUMBER: electricityEstimateConsumptionHouseOccasionallyInhabitedInputData.phoneNumber,
        consumptionPointObjectType: electricityEstimateConsumptionHouseOccasionallyInhabitedInputData.consumptionPointObjectType,
        consumptionPointZipCode: electricityEstimateConsumptionHouseOccasionallyInhabitedInputData.consumptionPointZipCode,
        electricHeatingTypes: electricityEstimateConsumptionHouseOccasionallyInhabitedInputData.electricHeatingTypes
            .map((item) => item.toUpperCase().replace('STORAGEHEATER', 'STORAGE_HEATER')),
        electricityUsage: electricityEstimateConsumptionHouseOccasionallyInhabitedInputData.electricityUsage
            .map((item) => item.toUpperCase().replace('WATERBOILER', 'WATER_BOILER')),
        exactElectricityConsumptionKnown: electricityEstimateConsumptionHouseOccasionallyInhabitedInputData.exactElectricityConsumptionKnown,
        mostlyLedLightsField: electricityEstimateConsumptionHouseOccasionallyInhabitedInputData.mostlyLedLightsField,
        mostlyNewElectricalDevicesUsedField: electricityEstimateConsumptionHouseOccasionallyInhabitedInputData.mostlyNewElectricalDevicesUsedField
    }
};

export const electricityEstimateConsumptionOtherObjectInputData = {
    consumptionPointZipCode: "39701",
    currentElectricityProvider: EnergyProvider.PRE,
    isFirstProvider: false,
    electricityUsage: ["electricCar"],
    exactElectricityConsumptionKnown: false,
    consumptionPointObjectType: ConsumptionPointObjectType.OTHER,
    phoneNumber: "775000000",
    email: emails.PREREGISTERED,
};

export const electricityEstimateConsumptionOtherObjectServiceRequestData = {
    automaticOffer: true,
    serviceType: "ENERGY",
    energyType: "ELECTRICITY",
    source: "RIXO",
    publicUserIdentification: {
        emailAddress: electricityEstimateConsumptionOtherObjectInputData.email,
        approvals: {
            AUTOMATIC_INFORMATION_PROCESSING: true,
            BUSINESS_CONDITIONS: true,
            ELECTRONIC_COMMUNICATION: true
        }
    },
    data: {
        CLIENT_PHONE_NUMBER: electricityEstimateConsumptionOtherObjectInputData.phoneNumber,
        consumptionPointObjectType: electricityEstimateConsumptionOtherObjectInputData.consumptionPointObjectType,
        consumptionPointZipCode: electricityEstimateConsumptionOtherObjectInputData.consumptionPointZipCode,
        electricityUsage: electricityEstimateConsumptionOtherObjectInputData.electricityUsage
            .map((item) => item.toUpperCase().replace('ELECTRICCAR', 'ELECTRIC_CAR')),
        exactElectricityConsumptionKnown: electricityEstimateConsumptionOtherObjectInputData.exactElectricityConsumptionKnown,
    }
};