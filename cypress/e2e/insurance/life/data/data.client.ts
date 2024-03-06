import { CitizenshipType } from "../../../../enums/citizenshipType";
import {
  Occupation,
  OccupationType,
  WorkType,
} from "../../../../enums/workType";
import { ACTIVE_PASSWORD, emails } from "../../../public/emails";
import { SportLevel, SportType } from "../../../../enums/sportType";
import { DisabilityPensionType } from "../../../../enums/disabilityPensionType";
import { transformDisabilityPensionTypeToText } from "../../../../../helpers/enumHelper";
import { ILifeFullInputData } from "../types";

export const lifeInputData = {
  BASIC_INFORMATION: {
    workType: WorkType.ENTREPRENEUR,
    occupationType: OccupationType.SERVICES,
    citizenship: CitizenshipType.CZ,
    sicknessInsurance: false,
  },
  HEALTH_STATUS: {
    disabilityPension: false,
    height: 180,
    weight: 90,
    birthYear: 2000,
    disabilityPensionDegree: "Invalidní důchod I. stupně",
  },
  FINANCIAL_STATUS: {
    dependentPersons: true,
    monthlyExpenses: 26400,
    monthlyNetIncome: 35000,
    cashReserveValue: 150000,
    mortgage: false,
  },
  CONTACT_INFO: {
    name: "Lucik",
    surname: "Pucik",
    phoneNumber: "111111111",
    email: emails.PREREGISTERED,
  },
  DISCOUNTS: {
    birthNumber: "0210133616",
    occupation: Occupation.LAWYER,
    isSporting: false,
    sport: [],
    sportLevel: [],
    incapacity: false,
    longIncapacityInLastSevenYears: false,
    longTermTreatment: false,
    regularMedicaments: false,
    smoker: false,
  },
};

export const lifeClientPreregisteredData = {
  automaticOffer: false,
  flow: "INSURANCE_REQUEST_LIFE",
  insuranceType: "LIFE",
  data: {
    CASH_RESERVE_VALUE: lifeInputData.FINANCIAL_STATUS.cashReserveValue,
    CLIENT_BIRTH_YEAR: lifeInputData.HEALTH_STATUS.birthYear,
    CLIENT_CITIZENSHIP: lifeInputData.BASIC_INFORMATION.citizenship,
    CLIENT_HEIGHT: lifeInputData.HEALTH_STATUS.height,
    CLIENT_NAME: lifeInputData.CONTACT_INFO.name,
    CLIENT_SURNAME: lifeInputData.CONTACT_INFO.surname,
    CLIENT_PHONE_NUMBER: lifeInputData.CONTACT_INFO.phoneNumber,
    CLIENT_WEIGHT: lifeInputData.HEALTH_STATUS.weight,
    DEPENDENT_PERSONS: lifeInputData.FINANCIAL_STATUS.dependentPersons,
    DISABILITY_PENSION: lifeInputData.HEALTH_STATUS.disabilityPension,
    MONTHLY_NET_INCOME: lifeInputData.FINANCIAL_STATUS.monthlyNetIncome,
    MONTHLY_TOTAL_EXPENSES: lifeInputData.FINANCIAL_STATUS.monthlyExpenses,
    MORTGAGE: lifeInputData.FINANCIAL_STATUS.mortgage,
    OCCUPATION_TYPE: lifeInputData.BASIC_INFORMATION.occupationType,
    WORK_TYPE: lifeInputData.BASIC_INFORMATION.workType,
    SICKNESS_INSURANCE: lifeInputData.BASIC_INFORMATION.sicknessInsurance,
  },
  publicUserIdentification: {
    approvals: {
      AUTOMATIC_INFORMATION_PROCESSING: true,
      BUSINESS_CONDITIONS: true,
      ELECTRONIC_COMMUNICATION: true,
      INSURANCE_DATA_PROCESSING: true,
    },
    emailAddress: lifeInputData.CONTACT_INFO.email,
  },
  serviceType: "INSURANCE",
  source: "RIXO",
};

export const lifeClientUpdateData = {
  automaticOffer: true,
  data: {
    ...lifeClientPreregisteredData.data,
    CLIENT_BIRTH_NUMBER: lifeInputData.DISCOUNTS.birthNumber,
    SPORTS: {
      list: [],
      type: "SportsWizardValue",
    },
    LONG_TERM_TREATMENT: lifeInputData.DISCOUNTS.longTermTreatment,
    LONG_INCAPACITY_IN_LAST_SEVEN_YEARS:
      lifeInputData.DISCOUNTS.longIncapacityInLastSevenYears,
    REGULAR_MEDICAMENTS: lifeInputData.DISCOUNTS.regularMedicaments,
    INCAPACITY: lifeInputData.DISCOUNTS.incapacity,
    SMOKER: lifeInputData.DISCOUNTS.smoker,
  },
  publicUserIdentification: {
    ...lifeClientPreregisteredData.publicUserIdentification,
  },
  serviceType: lifeClientPreregisteredData.serviceType,
  source: lifeClientPreregisteredData.source,
};

export const lifeFullWizardInputData: ILifeFullInputData = {
  BASIC_INFORMATION: {
    workType: WorkType.EMPLOYMENT,
    occupationType: OccupationType.MANUAL,
    citizenship: CitizenshipType.CZ,
  },
  HEALTH_STATUS: {
    disabilityPension: true,
    disabilityPensionDegree: DisabilityPensionType.SECOND_DEGREE,
    height: 180,
    weight: 90,
    birthYear: 2000,
  },
  FINANCIAL_STATUS: {
    dependentPersons: true,
    monthlyExpenses: 26400,
    monthlyNetIncome: 35000,
    mortgage: true,
    mortgageMoneyLeftToPay: 3500000,
    cashReserveValue: 150000,
    mortgageAlreadyInsured: true,
  },
  CONTACT_INFO: {
    name: "Richard",
    surname: "Bares",
    phoneNumber: "775000000",
    email: emails.ACTIVE,
  },
  DISCOUNTS: {
    birthNumber: "0009201038",
    occupation: Occupation.LAWYER,
    isSporting: true,
    sport: [SportType.TENNIS, SportType.BADMINTON, SportType.SWIMMING],
    sportLevel: [
      SportLevel.PROFESSIONAL,
      SportLevel.MEMBER_OF_CLUB,
      SportLevel.MEMBER_OF_CLUB_NATIONAL,
    ],
    longTermTreatment: false,
    regularMedicaments: true,
    regularMedicamentsDescription: "Aulin",
    longIncapacityInLastSevenYears: true,
    longIncapacityInLastSevenYearsDescription: "Zlomenina",
    incapacity: false,
    smoker: true,
    cigarettesPerDay: 20,
    note: "LifeFullWizard is successful",
  },
};

export const lifeFullWizardPreregisteredData = (
  email: string,
  automaticOffer: boolean,
) => {
  return {
    automaticOffer,
    data: {
      CASH_RESERVE_VALUE:
        lifeFullWizardInputData.FINANCIAL_STATUS.cashReserveValue,
      CLIENT_BIRTH_YEAR: lifeFullWizardInputData.HEALTH_STATUS.birthYear,
      CLIENT_CITIZENSHIP: lifeFullWizardInputData.BASIC_INFORMATION.citizenship,
      CLIENT_HEIGHT: lifeFullWizardInputData.HEALTH_STATUS.height,
      CLIENT_NAME: lifeFullWizardInputData.CONTACT_INFO.name,
      CLIENT_SURNAME: lifeFullWizardInputData.CONTACT_INFO.surname,
      CLIENT_PHONE_NUMBER: lifeFullWizardInputData.CONTACT_INFO.phoneNumber,
      CLIENT_WEIGHT: lifeFullWizardInputData.HEALTH_STATUS.weight,
      DEPENDENT_PERSONS:
        lifeFullWizardInputData.FINANCIAL_STATUS.dependentPersons,
      DISABILITY_PENSION:
        lifeFullWizardInputData.HEALTH_STATUS.disabilityPension,
      DISABILITY_PENSION_DEGREE: transformDisabilityPensionTypeToText(
        DisabilityPensionType.SECOND_DEGREE,
      ),
      MONTHLY_NET_INCOME:
        lifeFullWizardInputData.FINANCIAL_STATUS.monthlyNetIncome,
      MONTHLY_TOTAL_EXPENSES:
        lifeFullWizardInputData.FINANCIAL_STATUS.monthlyExpenses,
      MORTGAGE: lifeFullWizardInputData.FINANCIAL_STATUS.mortgage,
      MORTGAGE_ALREADY_INSURED:
        lifeFullWizardInputData.FINANCIAL_STATUS.mortgageAlreadyInsured,
      MORTGAGE_MONEY_LEFT_TO_PAY:
        lifeFullWizardInputData.FINANCIAL_STATUS.mortgageMoneyLeftToPay,
      OCCUPATION_TYPE: lifeFullWizardInputData.BASIC_INFORMATION.occupationType,
      WORK_TYPE: lifeFullWizardInputData.BASIC_INFORMATION.workType,
    },
    flow: "INSURANCE_REQUEST_LIFE",
    insuranceType: "LIFE",
    publicUserIdentification: {
      accountVerification: {
        password: ACTIVE_PASSWORD,
      },
      approvals: {
        AUTOMATIC_INFORMATION_PROCESSING: true,
        BUSINESS_CONDITIONS: true,
        ELECTRONIC_COMMUNICATION: true,
        INSURANCE_DATA_PROCESSING: true,
      },
      emailAddress: email,
    },
    serviceType: "INSURANCE",
    source: "RIXO",
  };
};

export const lifeFullWizardUpdateData = {
  automaticOffer: true,
  data: {
    CASH_RESERVE_VALUE:
      lifeFullWizardInputData.FINANCIAL_STATUS.cashReserveValue,
    CLIENT_BIRTH_NUMBER: lifeFullWizardInputData.DISCOUNTS.birthNumber,
    CLIENT_BIRTH_YEAR: lifeFullWizardInputData.HEALTH_STATUS.birthYear,
    CLIENT_CITIZENSHIP: lifeFullWizardInputData.BASIC_INFORMATION.citizenship,
    CLIENT_HEIGHT: lifeFullWizardInputData.HEALTH_STATUS.height,
    CLIENT_NAME: lifeFullWizardInputData.CONTACT_INFO.name,
    CLIENT_SURNAME: lifeFullWizardInputData.CONTACT_INFO.surname,
    CLIENT_PHONE_NUMBER: lifeFullWizardInputData.CONTACT_INFO.phoneNumber,
    CLIENT_WEIGHT: lifeFullWizardInputData.HEALTH_STATUS.weight,
    DEPENDENT_PERSONS:
      lifeFullWizardInputData.FINANCIAL_STATUS.dependentPersons,
    DISABILITY_PENSION: lifeFullWizardInputData.HEALTH_STATUS.disabilityPension,
    DISABILITY_PENSION_DEGREE: transformDisabilityPensionTypeToText(
      DisabilityPensionType.SECOND_DEGREE,
    ),
    MONTHLY_NET_INCOME:
      lifeFullWizardInputData.FINANCIAL_STATUS.monthlyNetIncome,
    MONTHLY_TOTAL_EXPENSES:
      lifeFullWizardInputData.FINANCIAL_STATUS.monthlyExpenses,
    MORTGAGE: lifeFullWizardInputData.FINANCIAL_STATUS.mortgage,
    MORTGAGE_ALREADY_INSURED:
      lifeFullWizardInputData.FINANCIAL_STATUS.mortgageAlreadyInsured,
    MORTGAGE_MONEY_LEFT_TO_PAY:
      lifeFullWizardInputData.FINANCIAL_STATUS.mortgageMoneyLeftToPay,
    OCCUPATION_TYPE: lifeFullWizardInputData.BASIC_INFORMATION.occupationType,
    WORK_TYPE: lifeFullWizardInputData.BASIC_INFORMATION.workType,
    CIGARETTES_PER_DAY: lifeFullWizardInputData.DISCOUNTS.cigarettesPerDay,
    INCAPACITY: lifeFullWizardInputData.DISCOUNTS.incapacity,
    LONG_INCAPACITY_IN_LAST_SEVEN_YEARS:
      lifeFullWizardInputData.DISCOUNTS.longIncapacityInLastSevenYears,
    LONG_INCAPACITY_IN_LAST_SEVEN_YEARS_DESCRIPTION:
      lifeFullWizardInputData.DISCOUNTS
        .longIncapacityInLastSevenYearsDescription,
    LONG_TERM_TREATMENT: lifeFullWizardInputData.DISCOUNTS.longTermTreatment,
    REGULAR_MEDICAMENTS: lifeFullWizardInputData.DISCOUNTS.regularMedicaments,
    REGULAR_MEDICAMENTS_DESCRIPTION:
      lifeFullWizardInputData.DISCOUNTS.regularMedicamentsDescription,
    SMOKER: lifeFullWizardInputData.DISCOUNTS.smoker,
    NOTE: lifeFullWizardInputData.DISCOUNTS.note,
  },
  insuranceType: "LIFE",
  publicUserIdentification: {
    approvals: {
      AUTOMATIC_INFORMATION_PROCESSING: true,
      BUSINESS_CONDITIONS: true,
      ELECTRONIC_COMMUNICATION: true,
      INSURANCE_DATA_PROCESSING: true,
    },
    emailAddress: lifeFullWizardInputData.CONTACT_INFO.email,
  },
  serviceType: "INSURANCE",
  source: "RIXO",
};
