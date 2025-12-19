import type { InputData, InputError } from "../types";

export function validateInput(values: InputData) {
  const errors: InputError = {};

  if (!values.billAmount || values.billAmount === 0) {
    errors.billAmount = "Can't be zero";
  }

  if (!values.totalPersons || values.totalPersons === 0) {
    errors.totalPersons = "Can't be zero";
  } else if (values.totalPersons < 2) {
    errors.totalPersons = "Should be more than 1";
  }
  return errors;
}
