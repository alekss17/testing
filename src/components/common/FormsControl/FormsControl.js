import React from "react"
import { Field } from "formik";
import '../../../Styles/formControl.css'

const TextArea = ({ field, form: { touched, errors },  asTag = "textarea", ...props }) => {
    const error = touched[field.name] && errors[field.name];

    const Tag = asTag
    return (
      <div className={"formControl" + (error ? " error" : "")}>
        <Tag {...field} className="TextArea" {...props} />
        {error && <span>{error}</span>}
      </div>
    )
}  

export const createField = (placeholder, name, validate, component, asTag, type = null, text = "" ) => {
  return (
  <div>
      <Field
        placeholder={placeholder}
        name={name}
        validate={validate}
        component={component}
        asTag={asTag}
        type={type}
      /> {text}
</div>
  )
}

export default TextArea;