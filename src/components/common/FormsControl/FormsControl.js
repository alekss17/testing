import React from "react"
import { Field } from "formik";
import '../../../Styles/formControl.css'

const TextArea = ({ field: {name}, field, form: { touched, errors },  astag = "textarea", ...props }) => {
    const error = touched[name] && errors[name];

    const Tag = astag
    return (
      <div className={"formControl" + (error ? " error" : "")}>
        <Tag {...field} className="TextArea" {...props} />
        {error && <span>{error}</span>}
      </div>
    )
}  

export const createField = (placeholder, name, validate, component, astag = "textarea", type = null, text = "" ) => {
  return (
  <div>
      <Field
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