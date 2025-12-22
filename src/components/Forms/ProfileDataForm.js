import React from "react"
import { Formik, Form } from "formik"
import TextArea, { createField } from "../common/FormsControl/FormsControl"
import '../../Styles/ProfileDataF.css'
import { Button } from "antd"

const ProfileDataForm = ({ profile, handleSubmit, onLeaveSubmit }) => {
  return (
    <Formik
      enableReinitialize
      initialValues={{
        fullName: profile.fullName,
        aboutMe: profile.aboutMe,
        lookingForAJob: profile.lookingForAJob,
        lookingForAJobDescription: profile.lookingForAJobDescription,
        contacts: profile.contacts
      }}
      onSubmit={async (values, { setErrors, setSubmitting }) => {
        const errors = await handleSubmit(values)

        if (errors) {
          setErrors(errors)
        }

        setSubmitting(false)
      }}
    >
      {() => (
        <Form>
          <button className="Save" type="submit">Save</button>
          <Button  type="primary" onClick={onLeaveSubmit} >Leave</Button>

          <div>
            <p>fullName:</p>
            {createField("Full Name", "fullName", null, TextArea, "input")}
          </div>

          <div>
            <p>About Me</p>
            {createField("About Me", "aboutMe", null, TextArea, "input")}
          </div>

          <div className="LookingForAJob">
            <p>lookingForAJob</p>
            {createField("", "lookingForAJob", null, TextArea, "input", "checkbox")}
          </div>

          <div>
            <p>My skills</p>
            {createField("My skills", "lookingForAJobDescription", null, TextArea)}
          </div>

          <b>Contacts</b>
          {Object.keys(profile.contacts).map(key => (
            <div key={key}>
              {createField(key, `contacts.${key}`, null, TextArea)}
            </div>
          ))}

        </Form>
      )}
    </Formik>
  )
}

export default ProfileDataForm
