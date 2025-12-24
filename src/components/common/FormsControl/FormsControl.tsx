import React from "react"
import { Field } from "formik";
import '../../../Styles/formControl.css'
import { getIn } from "formik"

const TextArea = ({ field, form: { touched, errors }, astag = "textarea", ...props }: any) => {
  const error = getIn(touched, field.name) && getIn(errors, field.name)
  const Tag = astag

  return (
    <div className={"formControl" + (error ? " error" : "")}>
      <Tag {...field} {...props} />
      {error && <span>{error}</span>}
    </div>
  )
}

export type Validator<T = string> = (value: T) => string | null


export const createField = (
  placeholder: string = "",
  name: string = "",
  validate?: Validator,
  component: React.ComponentType | null = TextArea,
  astag: string = "textarea",
  type?: string,
  text: string = "",
  className: string = ''
) => {
  return (
    <div>
      <Field
        className={className}
        placeholder={placeholder}
        name={name}
        validate={validate ?? undefined}
        component={component ?? null}
        astag={astag}
        type={type}
      /> {text}
    </div>
  )
}

export default TextArea;