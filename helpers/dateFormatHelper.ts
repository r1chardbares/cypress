import moment = require("moment");

export const DATE_FORMAT = "YYYY-MM-DD";
export const CZECH_DATE_FORMAT = "DD.MM.YYYY";

export const feDateToBeFormat = (
  date: string,
  format: string = CZECH_DATE_FORMAT,
) => {
  return moment(date, format).format(DATE_FORMAT);
};
