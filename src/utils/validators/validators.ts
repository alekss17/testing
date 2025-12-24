import { Validator } from "../../components/common/FormsControl/FormsControl";

export const required: Validator = value =>
    !value ? 'Field is required' : null

export const MaxLenghtCreator =
  (max: number): Validator<string> =>
  value =>
    value && value.length > max
      ? `Max length is ${max} symbols`
      : null


