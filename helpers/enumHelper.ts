import { DisabilityPensionType } from "../cypress/enums/disabilityPensionType";

export const transformDisabilityPensionTypeToText = (
  value: DisabilityPensionType,
): string => {
  switch (value) {
    case DisabilityPensionType.FIRST_DEGREE:
      return "1";
    case DisabilityPensionType.SECOND_DEGREE:
      return "2";
    case DisabilityPensionType.THIRD_DEGREE:
      return "3";
    default:
      return "";
  }
};
