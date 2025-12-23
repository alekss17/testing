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

export const createField = (
  placeholder: string = "",
  name: string = "",
  validate?: any,
  component: any = TextArea,
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
        validate={validate}
        component={component}
        astag={astag}
        type={type}
      /> {text}
    </div>
  )
}

export default TextArea;