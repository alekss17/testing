import { Validator } from "../../components/common/FormsControl/FormsControl";

export const required: Validator = value =>
    !value ? 'Field is required' : undefined

export const MaxLenghtCreator =
  (max: number): Validator =>
  value =>
    value.length > max
      ? `Max length is ${max} symbols`
      : undefined;


