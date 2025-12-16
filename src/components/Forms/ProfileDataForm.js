import React from "react"
import { Formik, Form, Field } from "formik"
import createField from "../common/FormsControl/FormsControl"

const ProfileDataForm = ({ profile }) => {
    return <>
        {/* <Formik>
            <Form>
                <>
                    <button onClick={goToEditMode}>submit</button>
                    <div>
                        {profile.aboutMe &&
                            <p>About Me: {profile.aboutMe}</p>
                        }
                    </div>
                    <div className='Contacts'>
                        <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                        })}
                    </div>
                    <div className='Job'>
                        <p>lookingForAJob: {profile.lookingForAJob === true ? 'yes' : 'no'}</p>
                        {profile.lookingForAJob &&
                            <p>lookingForAJobDescription: {profile.lookingForAJobDescription}</p>
                        }
                    </div>
                    <div>
                    <p className='Name'>fullName</p>: {createField()}
                    </div>
                </>
            </Form>
        </Formik> */}
        в процесе...
    </>
}

export default ProfileDataForm