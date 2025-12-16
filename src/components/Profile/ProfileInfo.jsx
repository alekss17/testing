import '../../Styles/Myposts.css'
import Preloader from '../common/Preloader/Prelooader';
import ProfileStatus from './ProfileStatus'
import UserImg from '../../assets/images/user.jpg'

const ProfileInfo = ({profile,profileStatus, UpdateProfileStats, isOwner, savePhoto, ProfileLoading}) => {
    if (ProfileLoading === false) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
       if (e.target.files[0]) {
        savePhoto(e.target.files[0])
       }
    }
    return (
        <>
    <p>Home</p>
    <div><img className='profileLargePhoto' src={ profile.photos.large || UserImg}/></div>
    {isOwner === true ? <input type={"file"} onChange={onMainPhotoSelected}/> : null}
    <ProfileStatus isOwner={isOwner} profileStatus={profileStatus} UpdateProfileStats={UpdateProfileStats} />
    <div>
        <p>About Me: {profile.aboutMe}</p>
    </div>
    <div className='Contacts'>
        <p>facebook: {profile.contacts.facebook}</p>
        <p>website: {profile.contacts.websijte}</p>
        <p>vk: {profile.contacts.vk}</p>
        <p>twitter: {profile.contacts.twitter}</p>
        <p>instagram: {profile.contacts.instagram}</p>
        <p>youtube: {profile.contacts.youtube}</p>
        <p>github: {profile.contacts.github}</p>
        <p>MainLink: {profile.contacts.mainLink}</p>
    </div>
    <div className='Job'>
    <p>lookingForAJob: {profile.lookingForAJob === true ? 'yes' : 'no'}</p>
    <p>lookingForAJobDescription: {profile.lookingForAJobDescription}</p>
    </div>
    <p className='Name'>fullName: {profile.fullName}</p>
    <p>ava + description</p>
    </>
    )
}



export default ProfileInfo;