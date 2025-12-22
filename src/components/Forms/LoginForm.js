import React from "react";
import { Form, Formik } from "formik";
import { required, MaxLenghtCreator } from "../../utils/validators/validators";
import TextArea, { createField } from '../common/FormsControl/FormsControl';
import '../../Styles/formControl.css'

const MaxLenght40 = MaxLenghtCreator(40);

const isEmpty = (value) =>
  value === null ||
  value === undefined ||
  value === "" ||
  (Array.isArray(value) && value.length === 0);


const LoginForm = ({ formError, Submit, captchaUrl }) => {

  const validate = value => required(value) || MaxLenght40(value);

  return (
    <Formik
      initialValues={{ email: "", password: "", rememberMe: false, captcha: "" }}
      enableReinitialize={true}
      initialStatus={formError || null}
      onSubmit={(values, { setSubmitting, setStatus }) => {
        setStatus(null);
        Submit(values);
        setSubmitting(false);
      }} >
      {({ status }) => (
        <Form>

          {createField("email", "email", validate, TextArea, "input")}
          {createField("Password", "password", validate, TextArea, "input", "password")}
          {createField("", "rememberMe", null, null, "", "checkbox", "remember me")}

          {!isEmpty(status) &&
            <div className="form-summary-error">
              {Array.isArray(status) ? status.join(", ") : status}
            </div>
          }

          {captchaUrl &&
            <div>
              <img src={captchaUrl} />
              {createField("Captcha", "captcha", validate, TextArea, "input")}
            </div>
          }

          <div>
            <button type="submit">Login</button>
          </div>

        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
