import React from "react"
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

export default TextArea;