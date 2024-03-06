import { Occupation, OccupationType, WorkType } from "../../../enums/workType";
import { CitizenshipType } from "../../../enums/citizenshipType";
import { DisabilityPensionType } from "../../../enums/disabilityPensionType";
import { emails } from "../../public/emails";
import { SportLevel, SportType } from "../../../enums/sportType";

export interface ILifeFullInputData {
  BASIC_INFORMATION: {
    workType: WorkType;
    occupationType: OccupationType;
    citizenship: CitizenshipType;
  };
  HEALTH_STATUS: {
    disabilityPension: boolean;
    disabilityPensionDegree: DisabilityPensionType;
    height: number;
    weight: number;
    birthYear: number;
  };
  FINANCIAL_STATUS: {
    dependentPersons: boolean;
    monthlyExpenses: number;
    monthlyNetIncome: number;
    mortgage: boolean;
    mortgageMoneyLeftToPay: number;
    cashReserveValue: number;
    mortgageAlreadyInsured: boolean;
  };
  CONTACT_INFO: {
    name: string;
    surname: string;
    phoneNumber: string;
    email: emails.ACTIVE;
  };
  DISCOUNTS: {
    birthNumber: string;
    occupation: Occupation;
    isSporting: boolean;
    sport: SportType[];
    sportLevel: SportLevel[];
    longTermTreatment: boolean;
    regularMedicaments: boolean;
    regularMedicamentsDescription: string;
    longIncapacityInLastSevenYears: boolean;
    longIncapacityInLastSevenYearsDescription: string;
    incapacity: boolean;
    smoker: boolean;
    cigarettesPerDay: number;
    note: string;
  };
}
