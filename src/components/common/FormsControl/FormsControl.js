import React from "react"
import { Field } from "formik";
import '../../../Styles/formControl.css'
import { getIn } from "formik"

const TextArea = ({ field, form: { touched, errors }, astag = "textarea", ...props }) => {
  const error = getIn(touched, field.name) && getIn(errors, field.name)
  const Tag = astag

  return (
    <div className={"formControl" + (error ? " error" : "")}>
      <Tag {...field} {...props} />
      {error && <span>{error}</span>}
    </div>
  )
}


export const createField = ( placeholder, name, validate, component, astag = "textarea", type = null, text = "", className = '' ) => {
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