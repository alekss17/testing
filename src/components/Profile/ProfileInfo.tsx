import '../../Styles/Myposts.css'
import React from 'react';
import Preloader from '../common/Preloader/Prelooader';
import ProfileStatus from './ProfileStatus'
import UserImg from '../../assets/images/user.jpg'
import { useState } from 'react';
import ProfileDataForm from '../Forms/ProfileDataForm';

interface Contacts {
    facebook: string | null;
    website: string | null;
    vk: string | null;
    twitter: string | null;
    instagram: string | null;
    youtube: string | null;
    github: string | null;
    mainLink: string | null;
}

interface Photos {
    small: string | null;
    large: string | null;
}

export interface UserProfile {
    aboutMe: string | null;
    contacts: Contacts;
    lookingForAJob: boolean;
    lookingForAJobDescription: string | null;
    fullName: string;
    userId: number;
    photos: Photos;
}    

interface ComponentProps {
    profile: UserProfile
    profileStatus: string;
    UpdateProfileStats: (status: string) => void;
    isOwner: boolean;
    savePhoto: (file: File) => void;
    ProfileLoading: boolean;
    saveProfile: (profile: UserProfile) => Promise<any>
}

const ProfileInfo = ({ profile, profileStatus, UpdateProfileStats, isOwner, savePhoto, ProfileLoading, saveProfile }: ComponentProps) => {
    const [editMode, setEditMode] = useState<boolean>(false)

    if (!ProfileLoading) return <Preloader />

    const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            savePhoto(e.target.files[0]);
        }
    }

    const handleSubmit = async (values: UserProfile) => {
        const errors = await saveProfile(values)

        if (!errors) {
            setEditMode(false)
        }

        return errors
    }
    const onLeaveSubmit = () => setEditMode(false)

    return (
        <>
            <img src={profile.photos?.large || UserImg} alt="Profile" />

            {isOwner && <input type="file" onChange={onMainPhotoSelected} />}

            <ProfileStatus
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

interface ProfileDataProps {
    profile: UserProfile;
    owner: boolean;
    goToEditMode: () => void;
}

const ProfileData = ({ profile, owner, goToEditMode }: ProfileDataProps) => {
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
                    const contactKey = key as keyof Contacts;
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[contactKey]} />
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

interface ContactProps {
    contactTitle: string;
    contactValue: string | null;
}

const Contact = ({ contactTitle, contactValue }: ContactProps) => {
    return <div><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;