import '../../Styles/Myposts.css'
import Preloader from '../common/Preloader/Prelooader';
import ProfileStatus from './ProfileStatus'
import UserImg from '../../assets/images/user.jpg'
import { useState } from 'react';
import ProfileDataForm from '../Forms/ProfileDataForm';



const ProfileInfo = ({ profile, profileStatus, UpdateProfileStats, isOwner, savePhoto, ProfileLoading, saveProfile }) => {
        const [editMode, setEditMode] = useState(false)

        if (!ProfileLoading) return <Preloader />

        const onMainPhotoSelected = (e) => {
                if (e.target.files[0]) {
                        savePhoto(e.target.files[0])
                }
        }

        const handleSubmit = async (values) => {
                const errors = await saveProfile(values)

                if (!errors) {
                        setEditMode(false)
                }

                return errors
        }
        const onLeaveSubmit = () => {
                setEditMode(false)
        }

        return (
                <>
                        <img src={profile.photos.large || UserImg} />

                        {isOwner && <input type="file" onChange={onMainPhotoSelected} />}

                        <ProfileStatus
                                initialValues={profile}
                                isOwner={isOwner}
                                profileStatus={profileStatus}
                                UpdateProfileStats={UpdateProfileStats}
                        />

                        {editMode ? (
                                <ProfileDataForm
                                        profile={profile}
                                        handleSubmit={handleSubmit}
                                        onLeaveSubmit={onLeaveSubmit}
                                />
                        ) : (
                                <ProfileData
                                        profile={profile}
                                        owner={isOwner}
                                        goToEditMode={() => setEditMode(true)}
                                />
                        )}
                </>
        )
}

const ProfileData = ({ profile, owner, goToEditMode }) => {
        return (
                <>
                        {owner && <button onClick={goToEditMode}>edit</button>}
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
                        <p className='Name'>fullName: {profile.fullName}</p>
                </>
        )
}

const Contact = ({ contactTitle, contactValue }) => {
        return <div><b>{contactTitle}</b>: {contactValue}</div>
}



export default ProfileInfo;