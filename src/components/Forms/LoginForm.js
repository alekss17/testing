import React from "react";
import { Field, Form, Formik } from "formik";
import { required, MaxLenghtCreator } from "../../utils/validators/validators";
import TextArea from '../common/FormsControl/FormsControl';
import '../../Styles/formControl.css'

const MaxLenght40 = MaxLenghtCreator(40);

const LoginForm = (props) => {
  const validate = value => required(value) || MaxLenght40(value);

  return (
<Formik
  initialValues={{ email: "", password: "", rememberMe: false }}
  enableReinitialize={true} 
  initialStatus={props.formError} 
  onSubmit={(values, { setSubmitting }) => {
    props.Submit(values);
    setSubmitting(false);
  }}
>
        { ({status}) => (
        <Form>
          <div>
            <Field
              placeholder="email"
              name="email"
              validate={validate}
              component={TextArea}
              asTag="input"
            />
          </div>
          <div>
            <Field
              placeholder="Password"
              name="password"
              validate={validate}
              component={TextArea}
              asTag="input"
            />
          </div>
          <div>
            <Field type="checkbox" name="rememberMe" /> remember me
          </div>
          { status && <div className="form-summary-error">
            {status}
            </div> }
          <div>
            <button type="submit">Login</button>
          </div>
        </Form>
)}
    </Formik>
  );
};

export default LoginForm;
