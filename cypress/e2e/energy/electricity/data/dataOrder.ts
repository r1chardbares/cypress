import {EnergyProvider, Providers} from "../../../../enums/providers";
import {DistributionRate} from "../../../../enums/distributionRate";
import {CircuitBreakerConnectionType, CircuitBreakerType} from "../../../../enums/circuitBreakerType";
import {emails} from "../../../public/emails";
import {PaymentType, RefundType} from "../../../../enums/paymentType";
import {BankCode} from "../../../../enums/bankCode";
import moment = require("moment");
import {CZECH_DATE_FORMAT, feDateToBeFormat} from "../../../../../helpers/dateFormatHelper";
import {EnergyContractTerminaion} from "../../../../enums/energyContractTerminaion";

/**
 * YELLO
 */

export const electricityYelloConsumptionInputData = {
    consumptionPointZipCode: "11000",
    electricityUsage: ["lights", "cooking", "heating"],
    electricHeatingTypes: ["boiler"],
    currentElectricityProvider: EnergyProvider.CEZ_PRODEJ,
    isFirstProvider: true, //CEZ is first value in selectBox -> set on true
    exactElectricityConsumptionKnown: true,
    electricityDistributionRate: DistributionRate.D25D,
    circuitBreakerType: CircuitBreakerType.DO_3X25,
    yearlyElectricityConsumptionInHighTariff: "3000",
    yearlyElectricityConsumptionInLowTariff: "5000",
    phoneNumber: "775000000",
    email: emails.PREREGISTERED,
};

export const electricityYelloConsumptionServiceRequestData = {
    automaticOffer: true,
    serviceType: "ENERGY",
    energyType: "ELECTRICITY",
    source: "RIXO",
    publicUserIdentification: {
        emailAddress: electricityYelloConsumptionInputData.email,
        approvals: {
            AUTOMATIC_INFORMATION_PROCESSING: true,
            BUSINESS_CONDITIONS: true,
            ELECTRONIC_COMMUNICATION: true
        }
    },
    data: {
        consumptionPointZipCode: electricityYelloConsumptionInputData.consumptionPointZipCode,
        electricityUsage: electricityYelloConsumptionInputData.electricityUsage
            .map((item) => item.toUpperCase()),
        electricHeatingTypes: electricityYelloConsumptionInputData.electricHeatingTypes
            .map((item) => item.toUpperCase()),
        exactElectricityConsumptionKnown: electricityYelloConsumptionInputData.exactElectricityConsumptionKnown,
        yearlyElectricityConsumptionInHighTariff: electricityYelloConsumptionInputData.yearlyElectricityConsumptionInHighTariff,
        yearlyElectricityConsumptionInLowTariff: electricityYelloConsumptionInputData.yearlyElectricityConsumptionInLowTariff,
        CLIENT_PHONE_NUMBER: electricityYelloConsumptionInputData.phoneNumber,
    }
};

export const electricityYelloOrderInputData = {
    provider: Providers.YELLO,
    currentElectricityProvider: EnergyProvider.CEZ_PRODEJ,
    electricityConsumptionPointEan: "111111119",
    circuitBreakerConnectionType: CircuitBreakerConnectionType.THREE_PHASE,
    circuitBreakerValue: 25,
    consumptionPointAddressStreet: "Bílkova 6/8",
    consumptionPointAddressCity: "Praha",
    consumptionPointZipCode: electricityYelloConsumptionInputData.consumptionPointZipCode,
    consumptionPointAddressApartmentHasNoNumber: false,
    consumptionPointAddressApartmentNumber: "2",
    firstName: "Richard",
    lastName: "Riccardinho",
    birthDate: "10.10.1988",
    phoneNumber: electricityYelloConsumptionInputData.phoneNumber,
    consumptionPointAddressSameAsPermanent: true,
    deliveryAddressSameAsPermanent: true,
    monthlyDepositAmount: 3500,
    monthlyDepositPaymentType: PaymentType.DIRECT_DEBIT,
    monthlyDepositRefundType: RefundType.BANK_TRANSFER,
    bankAccountPrefix: "19",
    bankAccountNumber: "2110018411",
    bankCode: BankCode.CSOB,
    sipoNumber: 3010011293,
    latestElectricityBilling: ["Vyuctovani.pdf"],
    providerTerminatesCurrentContract: true,
    currentElectricityContractIndefinite: true, //false->urcita, true->neurcita
    priceIncrease: false,
    increaseInOngoingContract: false, //false->Až do dalšího období, true->V průběhu závazku
    currentElectricityContractEndDate: moment().add(3, "d").format(CZECH_DATE_FORMAT).toString(),
    newPriceListBeginDate: moment().add(3, "d").format(CZECH_DATE_FORMAT).toString(),
};
export const electricityYelloOrderRequestArrangementData = {
    data: {
        birthDate: feDateToBeFormat(electricityYelloOrderInputData.birthDate),
        circuitBreakerConnectionType: electricityYelloOrderInputData.circuitBreakerConnectionType,
        circuitBreakerValue: electricityYelloOrderInputData.circuitBreakerValue,
        consumptionPointAddressApartmentHasNoNumber: electricityYelloOrderInputData.consumptionPointAddressApartmentHasNoNumber,
        consumptionPointAddressApartmentNumber: electricityYelloOrderInputData.consumptionPointAddressApartmentNumber,
        consumptionPointAddressCity: electricityYelloOrderInputData.consumptionPointAddressCity,
        consumptionPointAddressSameAsPermanent: electricityYelloOrderInputData.consumptionPointAddressSameAsPermanent,
        consumptionPointAddressStreet: electricityYelloOrderInputData.consumptionPointAddressStreet,
        consumptionPointAddressZipCode: electricityYelloConsumptionInputData.consumptionPointZipCode,
        deliveryAddressSameAsPermanent: electricityYelloOrderInputData.deliveryAddressSameAsPermanent,
        electricityConsumptionPointEan: "859182400" + electricityYelloOrderInputData.electricityConsumptionPointEan,
        firstName: electricityYelloOrderInputData.firstName,
        lastName: electricityYelloOrderInputData.lastName,
        phoneNumber: electricityYelloOrderInputData.phoneNumber,
    }
};

//Binary data
export const electricityYelloOrderRequestArrangementDataWithFiles = {
    data: {
        bankAccountNumber: electricityYelloOrderInputData.bankAccountNumber,
        bankAccountPrefix: electricityYelloOrderInputData.bankAccountPrefix,
        birthDate: feDateToBeFormat(electricityYelloOrderInputData.birthDate),
        circuitBreakerConnectionType: electricityYelloOrderInputData.circuitBreakerConnectionType,
        circuitBreakerValue: electricityYelloOrderInputData.circuitBreakerValue,
        consumptionPointAddressApartmentHasNoNumber: electricityYelloOrderInputData.consumptionPointAddressApartmentHasNoNumber,
        consumptionPointAddressApartmentNumber: electricityYelloOrderInputData.consumptionPointAddressApartmentNumber,
        consumptionPointAddressCity: electricityYelloOrderInputData.consumptionPointAddressCity,
        consumptionPointAddressSameAsPermanent: electricityYelloOrderInputData.consumptionPointAddressSameAsPermanent,
        consumptionPointAddressStreet: electricityYelloOrderInputData.consumptionPointAddressStreet,
        consumptionPointAddressZipCode: electricityYelloConsumptionInputData.consumptionPointZipCode,
        deliveryAddressSameAsPermanent: electricityYelloOrderInputData.deliveryAddressSameAsPermanent,
        electricityConsumptionPointEan: "859182400" + electricityYelloOrderInputData.electricityConsumptionPointEan,
        firstName: electricityYelloOrderInputData.firstName,
        lastName: electricityYelloOrderInputData.lastName,
        latestElectricityBilling: ["latestElectricityBilling"],
        monthlyDepositAmount: electricityYelloOrderInputData.monthlyDepositAmount.toString(),
        monthlyDepositPaymentType: electricityYelloOrderInputData.monthlyDepositPaymentType,
        monthlyDepositRefundType: electricityYelloOrderInputData.monthlyDepositRefundType,
        phoneNumber: electricityYelloOrderInputData.phoneNumber,

    }
};

export const electricityYelloOrderRequestArrangementDataV2 = {
    data: {
        bankAccountPrefix: electricityYelloOrderInputData.bankAccountPrefix,
        bankAccountNumber: electricityYelloOrderInputData.bankAccountNumber,
        birthDate: feDateToBeFormat(electricityYelloOrderInputData.birthDate),
        circuitBreakerConnectionType: electricityYelloOrderInputData.circuitBreakerConnectionType,
        circuitBreakerValue: electricityYelloOrderInputData.circuitBreakerValue,
        consumptionPointAddressApartmentHasNoNumber: electricityYelloOrderInputData.consumptionPointAddressApartmentHasNoNumber,
        consumptionPointAddressApartmentNumber: electricityYelloOrderInputData.consumptionPointAddressApartmentNumber,
        consumptionPointAddressCity: electricityYelloOrderInputData.consumptionPointAddressCity,
        consumptionPointAddressSameAsPermanent: electricityYelloOrderInputData.consumptionPointAddressSameAsPermanent,
        consumptionPointAddressStreet: electricityYelloOrderInputData.consumptionPointAddressStreet,
        consumptionPointAddressZipCode: electricityYelloConsumptionInputData.consumptionPointZipCode,
        contractTerminationType: EnergyContractTerminaion.NOTICE_PERIOD_3_MONTHS,
        currentElectricityContractIndefinite: electricityYelloOrderInputData.currentElectricityContractIndefinite,
        deliveryAddressSameAsPermanent: electricityYelloOrderInputData.deliveryAddressSameAsPermanent,
        electricityConsumptionPointEan: "859182400" + electricityYelloOrderInputData.electricityConsumptionPointEan,
        firstName: electricityYelloOrderInputData.firstName,
        lastName: electricityYelloOrderInputData.lastName,
        monthlyDepositAmount: electricityYelloOrderInputData.monthlyDepositAmount,
        monthlyDepositPaymentType: electricityYelloOrderInputData.monthlyDepositPaymentType,
        monthlyDepositRefundType: electricityYelloOrderInputData.monthlyDepositRefundType,
        phoneNumber: electricityYelloOrderInputData.phoneNumber,
        providerTerminatesCurrentContract: electricityYelloOrderInputData.providerTerminatesCurrentContract,
    }
};

/**
 * INNOGY
 */

export const electricityInnogyConsumptionInputData = {
    consumptionPointZipCode: "11000",
    electricityUsage: ["lights", "cooking", "heating"],
    electricHeatingTypes: ["boiler"],
    currentElectricityProvider: EnergyProvider.CEZ_PRODEJ,
    isFirstProvider: true, //CEZ is first value in selectBox -> set on true
    exactElectricityConsumptionKnown: true,
    electricityDistributionRate: DistributionRate.D25D,
    circuitBreakerType: CircuitBreakerType.DO_3X25,
    yearlyElectricityConsumptionInHighTariff: "3000",
    yearlyElectricityConsumptionInLowTariff: "5000",
    phoneNumber: "775000000",
    email: emails.PREREGISTERED,
};

export const electricityInnogyConsumptionServiceRequestData = {
    automaticOffer: true,
    serviceType: "ENERGY",
    energyType: "ELECTRICITY",
    source: "RIXO",
    publicUserIdentification: {
        emailAddress: electricityInnogyConsumptionInputData.email,
        approvals: {
            AUTOMATIC_INFORMATION_PROCESSING: true,
            BUSINESS_CONDITIONS: true,
            ELECTRONIC_COMMUNICATION: true
        }
    },
    data: {
        consumptionPointZipCode: electricityInnogyConsumptionInputData.consumptionPointZipCode,
        electricityUsage: electricityInnogyConsumptionInputData.electricityUsage
            .map((item) => item.toUpperCase()),
        electricHeatingTypes: electricityInnogyConsumptionInputData.electricHeatingTypes
            .map((item) => item.toUpperCase()),
        exactElectricityConsumptionKnown: electricityInnogyConsumptionInputData.exactElectricityConsumptionKnown,
        yearlyElectricityConsumptionInHighTariff: electricityInnogyConsumptionInputData.yearlyElectricityConsumptionInHighTariff,
        yearlyElectricityConsumptionInLowTariff: electricityInnogyConsumptionInputData.yearlyElectricityConsumptionInLowTariff,
        CLIENT_PHONE_NUMBER: electricityInnogyConsumptionInputData.phoneNumber,
    }
};

export const electricityInnogyOrderInputData = {
    provider: Providers.INNOGY,
    currentElectricityProvider: EnergyProvider.CEZ_PRODEJ,
    electricityConsumptionPointEan: "111111119",
    circuitBreakerConnectionType: CircuitBreakerConnectionType.THREE_PHASE,
    circuitBreakerValue: 25,
    consumptionPointAddressStreet: "Bílkova 6/8",
    consumptionPointAddressCity: "Praha",
    consumptionPointZipCode: electricityInnogyConsumptionInputData.consumptionPointZipCode,
    consumptionPointAddressApartmentHasNoNumber: false,
    consumptionPointAddressApartmentNumber: "2",
    firstName: "Richard",
    lastName: "Riccardinho",
    birthDate: "10.10.1988",
    phoneNumber: electricityInnogyConsumptionInputData.phoneNumber,
    latestElectricityBilling: ["Vyuctovani.pdf"],
    consumptionPointAddressSameAsPermanent: true,
    deliveryAddressSameAsPermanent: true,
    monthlyDepositAmount: "3500",
    monthlyDepositPaymentType: PaymentType.PAYMENT_ORDER,
    monthlyDepositRefundType: RefundType.DEPOSIT_TRANSFER,
    currentElectricityContractIndefinite: true,
    providerTerminatesCurrentContract: false,
};

export const electricityInnogyOrderRequestArrangementData = {
    data: {
        birthDate: feDateToBeFormat(electricityInnogyOrderInputData.birthDate),
        circuitBreakerConnectionType: electricityInnogyOrderInputData.circuitBreakerConnectionType,
        circuitBreakerValue: electricityInnogyOrderInputData.circuitBreakerValue,
        consumptionPointAddressApartmentHasNoNumber: electricityInnogyOrderInputData.consumptionPointAddressApartmentHasNoNumber,
        consumptionPointAddressApartmentNumber: electricityInnogyOrderInputData.consumptionPointAddressApartmentNumber,
        consumptionPointAddressCity: electricityInnogyOrderInputData.consumptionPointAddressCity,
        consumptionPointAddressSameAsPermanent: electricityInnogyOrderInputData.consumptionPointAddressSameAsPermanent,
        consumptionPointAddressStreet: electricityInnogyOrderInputData.consumptionPointAddressStreet,
        consumptionPointAddressZipCode: electricityInnogyConsumptionInputData.consumptionPointZipCode,
        deliveryAddressSameAsPermanent: electricityInnogyOrderInputData.deliveryAddressSameAsPermanent,
        electricityConsumptionPointEan: "859182400" + electricityInnogyOrderInputData.electricityConsumptionPointEan,
        firstName: electricityInnogyOrderInputData.firstName,
        lastName: electricityInnogyOrderInputData.lastName,
        phoneNumber: electricityInnogyOrderInputData.phoneNumber,
    }
};

//Binary data
export const electricityInnogyOrderRequestArrangementDataWithFiles = {
    data: {
        birthDate: feDateToBeFormat(electricityInnogyOrderInputData.birthDate),
        circuitBreakerConnectionType: electricityInnogyOrderInputData.circuitBreakerConnectionType,
        circuitBreakerValue: electricityInnogyOrderInputData.circuitBreakerValue,
        consumptionPointAddressApartmentHasNoNumber: electricityInnogyOrderInputData.consumptionPointAddressApartmentHasNoNumber,
        consumptionPointAddressApartmentNumber: electricityInnogyOrderInputData.consumptionPointAddressApartmentNumber,
        consumptionPointAddressCity: electricityInnogyOrderInputData.consumptionPointAddressCity,
        consumptionPointAddressSameAsPermanent: electricityInnogyOrderInputData.consumptionPointAddressSameAsPermanent,
        consumptionPointAddressStreet: electricityInnogyOrderInputData.consumptionPointAddressStreet,
        consumptionPointAddressZipCode: electricityInnogyConsumptionInputData.consumptionPointZipCode,
        currentElectricityContractIndefinite: electricityInnogyOrderInputData.currentElectricityContractIndefinite,
        deliveryAddressSameAsPermanent: electricityInnogyOrderInputData.deliveryAddressSameAsPermanent,
        electricityConsumptionPointEan: "859182400" + electricityInnogyOrderInputData.electricityConsumptionPointEan,
        firstName: electricityInnogyOrderInputData.firstName,
        lastName: electricityInnogyOrderInputData.lastName,
        latestElectricityBilling: ["latestElectricityBilling"],
        monthlyDepositAmount: electricityInnogyOrderInputData.monthlyDepositAmount,
        monthlyDepositPaymentType: electricityInnogyOrderInputData.monthlyDepositPaymentType,
        monthlyDepositRefundType: electricityInnogyOrderInputData.monthlyDepositRefundType,
        phoneNumber: electricityInnogyOrderInputData.phoneNumber,
        providerTerminatesCurrentContract: electricityInnogyOrderInputData.providerTerminatesCurrentContract,
    }
};

/**
 * CENTROPOL
 */

export const electricityCentropolConsumptionInputData = {
    consumptionPointZipCode: "11000",
    electricityUsage: ["lights", "cooking", "heating"],
    electricHeatingTypes: ["boiler"],
    currentElectricityProvider: EnergyProvider.CEZ_PRODEJ,
    isFirstProvider: true, //CEZ is first value in selectBox -> set on true
    exactElectricityConsumptionKnown: true,
    electricityDistributionRate: DistributionRate.D25D,
    circuitBreakerType: CircuitBreakerType.DO_3X25,
    yearlyElectricityConsumptionInHighTariff: "3000",
    yearlyElectricityConsumptionInLowTariff: "5000",
    phoneNumber: "775000000",
    email: emails.PREREGISTERED,
};

export const electricityCentropolConsumptionServiceRequestData = {
    automaticOffer: true,
    serviceType: "ENERGY",
    energyType: "ELECTRICITY",
    source: "RIXO",
    publicUserIdentification: {
        emailAddress: electricityCentropolConsumptionInputData.email,
        approvals: {
            AUTOMATIC_INFORMATION_PROCESSING: true,
            BUSINESS_CONDITIONS: true,
            ELECTRONIC_COMMUNICATION: true
        }
    },
    data: {
        consumptionPointZipCode: electricityCentropolConsumptionInputData.consumptionPointZipCode,
        electricityUsage: electricityCentropolConsumptionInputData.electricityUsage
            .map((item) => item.toUpperCase()),
        electricHeatingTypes: electricityCentropolConsumptionInputData.electricHeatingTypes
            .map((item) => item.toUpperCase()),
        exactElectricityConsumptionKnown: electricityCentropolConsumptionInputData.exactElectricityConsumptionKnown,
        yearlyElectricityConsumptionInHighTariff: electricityCentropolConsumptionInputData.yearlyElectricityConsumptionInHighTariff,
        yearlyElectricityConsumptionInLowTariff: electricityCentropolConsumptionInputData.yearlyElectricityConsumptionInLowTariff,
        CLIENT_PHONE_NUMBER: electricityCentropolConsumptionInputData.phoneNumber,
    }
};

export const electricityCentropolOrderInputData = {
    provider: Providers.CENTROPOL,
    currentElectricityProvider: EnergyProvider.CEZ_PRODEJ,
    electricityConsumptionPointEan: "111111119",
    circuitBreakerConnectionType: CircuitBreakerConnectionType.THREE_PHASE,
    circuitBreakerValue: 25,
    consumptionPointAddressStreet: "Bílkova 6/8",
    consumptionPointAddressCity: "Praha",
    consumptionPointZipCode: electricityCentropolConsumptionInputData.consumptionPointZipCode,
    consumptionPointAddressApartmentHasNoNumber: false,
    consumptionPointAddressApartmentNumber: "2",
    firstName: "Richard",
    lastName: "Riccardinho",
    birthNumber: "8807263608",
    phoneNumber: electricityCentropolConsumptionInputData.phoneNumber,
    latestElectricityBilling: ["Vyuctovani.pdf"],
    consumptionPointAddressSameAsPermanent: true,
    deliveryAddressSameAsPermanent: true,
    monthlyDepositAmount: "3500",
    monthlyDepositPaymentType: PaymentType.SIPO,
    sipoNumber: "3010011293",
    monthlyDepositRefundType: RefundType.SLIP,
    currentElectricityContractIndefinite: true,
    providerTerminatesCurrentContract: false,
};

export const electricityCentropolOrderRequestArrangementData = {
    data: {
        birthNumber: electricityCentropolOrderInputData.birthNumber,
        circuitBreakerConnectionType: electricityCentropolOrderInputData.circuitBreakerConnectionType,
        circuitBreakerValue: electricityCentropolOrderInputData.circuitBreakerValue,
        consumptionPointAddressApartmentHasNoNumber: electricityCentropolOrderInputData.consumptionPointAddressApartmentHasNoNumber,
        consumptionPointAddressApartmentNumber: electricityCentropolOrderInputData.consumptionPointAddressApartmentNumber,
        consumptionPointAddressCity: electricityCentropolOrderInputData.consumptionPointAddressCity,
        consumptionPointAddressSameAsPermanent: electricityCentropolOrderInputData.consumptionPointAddressSameAsPermanent,
        consumptionPointAddressStreet: electricityCentropolOrderInputData.consumptionPointAddressStreet,
        consumptionPointAddressZipCode: electricityCentropolOrderInputData.consumptionPointZipCode,
        deliveryAddressSameAsPermanent: electricityCentropolOrderInputData.deliveryAddressSameAsPermanent,
        electricityConsumptionPointEan: "859182400" + electricityCentropolOrderInputData.electricityConsumptionPointEan,
        firstName: electricityCentropolOrderInputData.firstName,
        lastName: electricityCentropolOrderInputData.lastName,
        phoneNumber: electricityCentropolOrderInputData.phoneNumber,
    }
};

//Binary data
export const electricityCentropolOrderRequestArrangementDataWithFiles = {
    data: {
        birthNumber: electricityCentropolOrderInputData.birthNumber,
        circuitBreakerConnectionType: electricityCentropolOrderInputData.circuitBreakerConnectionType,
        circuitBreakerValue: electricityCentropolOrderInputData.circuitBreakerValue,
        consumptionPointAddressApartmentHasNoNumber: electricityCentropolOrderInputData.consumptionPointAddressApartmentHasNoNumber,
        consumptionPointAddressApartmentNumber: electricityCentropolOrderInputData.consumptionPointAddressApartmentNumber,
        consumptionPointAddressCity: electricityCentropolOrderInputData.consumptionPointAddressCity,
        consumptionPointAddressSameAsPermanent: electricityCentropolOrderInputData.consumptionPointAddressSameAsPermanent,
        consumptionPointAddressStreet: electricityCentropolOrderInputData.consumptionPointAddressStreet,
        consumptionPointAddressZipCode: electricityCentropolConsumptionInputData.consumptionPointZipCode,
        currentElectricityContractIndefinite: electricityCentropolOrderInputData.currentElectricityContractIndefinite,
        deliveryAddressSameAsPermanent: electricityCentropolOrderInputData.deliveryAddressSameAsPermanent,
        electricityConsumptionPointEan: "859182400" + electricityCentropolOrderInputData.electricityConsumptionPointEan,
        firstName: electricityCentropolOrderInputData.firstName,
        lastName: electricityCentropolOrderInputData.lastName,
        latestElectricityBilling: ["latestElectricityBilling"],
        monthlyDepositAmount: electricityCentropolOrderInputData.monthlyDepositAmount,
        monthlyDepositPaymentType: electricityCentropolOrderInputData.monthlyDepositPaymentType,
        sipoNumber: electricityCentropolOrderInputData.sipoNumber,
        monthlyDepositRefundType: electricityCentropolOrderInputData.monthlyDepositRefundType,
        phoneNumber: electricityCentropolOrderInputData.phoneNumber,
        providerTerminatesCurrentContract: electricityCentropolOrderInputData.providerTerminatesCurrentContract,
    }
};

/**
 * MND
 */

export const electricityMndConsumptionInputData = {
    consumptionPointZipCode: "11000",
    electricityUsage: ["lights", "cooking", "heating"],
    electricHeatingTypes: ["boiler"],
    currentElectricityProvider: EnergyProvider.CEZ_PRODEJ,
    isFirstProvider: true, //CEZ is first value in selectBox -> set on true
    exactElectricityConsumptionKnown: true,
    electricityDistributionRate: DistributionRate.D25D,
    circuitBreakerType: CircuitBreakerType.DO_3X25,
    yearlyElectricityConsumptionInHighTariff: "3000",
    yearlyElectricityConsumptionInLowTariff: "5000",
    phoneNumber: "775000000",
    email: emails.PREREGISTERED,
};

export const electricityMndConsumptionServiceRequestData = {
    automaticOffer: true,
    serviceType: "ENERGY",
    energyType: "ELECTRICITY",
    source: "RIXO",
    publicUserIdentification: {
        emailAddress: electricityMndConsumptionInputData.email,
        approvals: {
            AUTOMATIC_INFORMATION_PROCESSING: true,
            BUSINESS_CONDITIONS: true,
            ELECTRONIC_COMMUNICATION: true
        }
    },
    data: {
        consumptionPointZipCode: electricityMndConsumptionInputData.consumptionPointZipCode,
        electricityUsage: electricityMndConsumptionInputData.electricityUsage
            .map((item) => item.toUpperCase()),
        electricHeatingTypes: electricityMndConsumptionInputData.electricHeatingTypes
            .map((item) => item.toUpperCase()),
        exactElectricityConsumptionKnown: electricityMndConsumptionInputData.exactElectricityConsumptionKnown,
        yearlyElectricityConsumptionInHighTariff: electricityMndConsumptionInputData.yearlyElectricityConsumptionInHighTariff,
        yearlyElectricityConsumptionInLowTariff: electricityMndConsumptionInputData.yearlyElectricityConsumptionInLowTariff,
        CLIENT_PHONE_NUMBER: electricityMndConsumptionInputData.phoneNumber,
    }
};

export const electricityMndOrderInputData = {
    provider: Providers.MND,
    currentElectricityProvider: EnergyProvider.CEZ_PRODEJ,
    electricityConsumptionPointEan: "111111119",
    circuitBreakerConnectionType: CircuitBreakerConnectionType.THREE_PHASE,
    circuitBreakerValue: 25,
    consumptionPointAddressStreet: "Bílkova 6/8",
    consumptionPointAddressCity: "Praha",
    consumptionPointZipCode: electricityMndConsumptionInputData.consumptionPointZipCode,
    consumptionPointAddressApartmentHasNoNumber: false,
    consumptionPointAddressApartmentNumber: "2",
    firstName: "Richard",
    lastName: "Riccardinho",
    birthDate: "10.10.1988",
    phoneNumber: electricityMndConsumptionInputData.phoneNumber,
    latestElectricityBilling: ["Vyuctovani.pdf"],
    consumptionPointAddressSameAsPermanent: true,
    deliveryAddressSameAsPermanent: true,
    monthlyDepositAmount: "3500",
    monthlyDepositPaymentType: PaymentType.PAYMENT_ORDER,
    bankAccountPrefix: "19",
    bankAccountNumber: "2110018411",
    bankCode: BankCode.CSOB,
};

export const electricityMndOrderRequestArrangementData = {
    data: {
        birthDate: feDateToBeFormat(electricityMndOrderInputData.birthDate),
        circuitBreakerConnectionType: electricityMndOrderInputData.circuitBreakerConnectionType,
        circuitBreakerValue: electricityMndOrderInputData.circuitBreakerValue,
        consumptionPointAddressApartmentHasNoNumber: electricityMndOrderInputData.consumptionPointAddressApartmentHasNoNumber,
        consumptionPointAddressApartmentNumber: electricityMndOrderInputData.consumptionPointAddressApartmentNumber,
        consumptionPointAddressCity: electricityMndOrderInputData.consumptionPointAddressCity,
        consumptionPointAddressSameAsPermanent: electricityMndOrderInputData.consumptionPointAddressSameAsPermanent,
        consumptionPointAddressStreet: electricityMndOrderInputData.consumptionPointAddressStreet,
        consumptionPointAddressZipCode: electricityMndConsumptionInputData.consumptionPointZipCode,
        deliveryAddressSameAsPermanent: electricityMndOrderInputData.deliveryAddressSameAsPermanent,
        electricityConsumptionPointEan: "859182400" + electricityMndOrderInputData.electricityConsumptionPointEan,
        firstName: electricityMndOrderInputData.firstName,
        lastName: electricityMndOrderInputData.lastName,
        phoneNumber: electricityMndOrderInputData.phoneNumber,
    }
};

//Binary data
export const electricityMndOrderRequestArrangementDataWithFiles = {
    data: {
        birthDate: feDateToBeFormat(electricityMndOrderInputData.birthDate),
        circuitBreakerConnectionType: electricityMndOrderInputData.circuitBreakerConnectionType,
        circuitBreakerValue: electricityMndOrderInputData.circuitBreakerValue,
        consumptionPointAddressApartmentHasNoNumber: electricityMndOrderInputData.consumptionPointAddressApartmentHasNoNumber,
        consumptionPointAddressApartmentNumber: electricityMndOrderInputData.consumptionPointAddressApartmentNumber,
        consumptionPointAddressCity: electricityMndOrderInputData.consumptionPointAddressCity,
        consumptionPointAddressSameAsPermanent: electricityMndOrderInputData.consumptionPointAddressSameAsPermanent,
        consumptionPointAddressStreet: electricityMndOrderInputData.consumptionPointAddressStreet,
        consumptionPointAddressZipCode: electricityMndConsumptionInputData.consumptionPointZipCode,
        deliveryAddressSameAsPermanent: electricityMndOrderInputData.deliveryAddressSameAsPermanent,
        electricityConsumptionPointEan: "859182400" + electricityMndOrderInputData.electricityConsumptionPointEan,
        firstName: electricityMndOrderInputData.firstName,
        lastName: electricityMndOrderInputData.lastName,
        latestElectricityBilling: ["latestElectricityBilling"],
        monthlyDepositAmount: electricityMndOrderInputData.monthlyDepositAmount,
        monthlyDepositPaymentType: electricityMndOrderInputData.monthlyDepositPaymentType,
        bankAccountPrefix: electricityMndOrderInputData.bankAccountPrefix,
        bankAccountNumber: electricityMndOrderInputData.bankAccountNumber,
        bankCode: electricityMndOrderInputData.bankCode,
        phoneNumber: electricityMndOrderInputData.phoneNumber,

    }
};

/**
 * EON
 */

export const electricityEonConsumptionInputData = {
    consumptionPointZipCode: "11000",
    electricityUsage: ["lights", "cooking", "heating"],
    electricHeatingTypes: ["boiler"],
    currentElectricityProvider: EnergyProvider.CEZ_PRODEJ,
    isFirstProvider: true, //CEZ is first value in selectBox -> set on true
    exactElectricityConsumptionKnown: true,
    electricityDistributionRate: DistributionRate.D25D,
    circuitBreakerType: CircuitBreakerType.DO_3X25,
    yearlyElectricityConsumptionInHighTariff: "3000",
    yearlyElectricityConsumptionInLowTariff: "5000",
    phoneNumber: "775000000",
    email: emails.PREREGISTERED,
};

export const electricityEonConsumptionServiceRequestData = {
    automaticOffer: true,
    serviceType: "ENERGY",
    energyType: "ELECTRICITY",
    source: "RIXO",
    publicUserIdentification: {
        emailAddress: electricityMndConsumptionInputData.email,
        approvals: {
            AUTOMATIC_INFORMATION_PROCESSING: true,
            BUSINESS_CONDITIONS: true,
            ELECTRONIC_COMMUNICATION: true
        }
    },
    data: {
        consumptionPointZipCode: electricityMndConsumptionInputData.consumptionPointZipCode,
        electricityUsage: electricityMndConsumptionInputData.electricityUsage
            .map((item) => item.toUpperCase()),
        electricHeatingTypes: electricityMndConsumptionInputData.electricHeatingTypes
            .map((item) => item.toUpperCase()),
        exactElectricityConsumptionKnown: electricityMndConsumptionInputData.exactElectricityConsumptionKnown,
        yearlyElectricityConsumptionInHighTariff: electricityMndConsumptionInputData.yearlyElectricityConsumptionInHighTariff,
        yearlyElectricityConsumptionInLowTariff: electricityMndConsumptionInputData.yearlyElectricityConsumptionInLowTariff,
        CLIENT_PHONE_NUMBER: electricityMndConsumptionInputData.phoneNumber,
    }
};

export const electricityEonOrderInputData = {
    provider: Providers.EON,
    firstName: "Richard",
    lastName: "Riccardinho",
    phoneNumber: electricityEonConsumptionInputData.phoneNumber,
};

export const electricityEonOrderRequestArrangementData = {
    data: {
        firstName: electricityEonOrderInputData.firstName,
        lastName: electricityEonOrderInputData.lastName,
        phoneNumber: electricityEonOrderInputData.phoneNumber,
    }
};



















