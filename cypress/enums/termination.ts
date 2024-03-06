export enum InsuranceType {
  VEHICLE = "VEHICLE",
  ESTATE = "ESTATE",
  LIFE = "LIFE",
}

export enum CommunicationType {
  EMAIL = "EMAIL",
  FILING_OFFICE = "FILING_OFFICE",
  LETTER = "LETTER",
}

export enum Reason {
  END_OF_INSURANCE_PERIOD = "END_OF_INSURANCE_PERIOD",
  PREMIUM_CHANGE = "PREMIUM_CHANGE",
  OWNER_CHANGE = "OWNER_CHANGE",
  OTHER = "OTHER",
  INSURANCE_TERMINATION = "INSURANCE_TERMINATION",
  WITHDRAWAL = "WITHDRAWAL",
  TWO_MONTHS_AFTER_ARRANGEMENT = "TWO_MONTHS_AFTER_ARRANGEMENT",
}

export enum OtherReason {
  TWO_MONTHS_AFTER_ARRANGEMENT = "Ve lhůtě 2 měsíců od sjednání",
  THREE_MONTHS_AFTER_INSURANCE_EVENT = "Do 3 měsíců od oznámení pojistné události",
  PERMANENT_REMOVAL_OF_VEHICLE_FROM_REGISTRY = "Trvalé vyřazení vozidla z evidence",
  TEMPORARY_REMOVAL_OF_VEHICLE_FROM_REGISTRY = "Dočasné vyřazení vozidla z evidence",
  WITHDRAWAL = "Odstoupení od pojistné smlouvy",
}

