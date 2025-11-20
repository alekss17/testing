import '../Styles/Myposts.css'
import Preloader from './common/Preloader/Prelooader';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <>
    <p>Home</p>
    <img className='img-gora' src='https://www.wearegecko.co.uk/media/50316/mountain-3.jpg'></img>
    <div><img className='profileLargePhoto' src={props.profile.photos.large}/></div>
    <div>
        <p>About Me: {props.profile.aboutMe}</p>
    </div>
    <div className='Contacts'>
        <p>facebook: {props.profile.contacts.facebook}</p>
        <p>website: {props.profile.contacts.websijte}</p>
        <p>vk: {props.profile.contacts.vk}</p>
        <p>twitter: {props.profile.contacts.twitter}</p>
        <p>instagram: {props.profile.contacts.instagram}</p>
        <p>youtube: {props.profile.contacts.youtube}</p>
        <p>github: {props.profile.contacts.github}</p>
        <p>MainLink: {props.profile.contacts.mainLink}</p>
    </div>
    <div className='Job'>
    <p>lookingForAJob: {props.profile.lookingForAJob === true ? 'yes' : 'no'}</p>
    <p>lookingForAJobDescription: {props.profile.lookingForAJobDescription}</p>
    </div>
    <p className='Name'>fullName: {props.profile.fullName}</p>
    <p>ava + description</p>
    </>
    )
}



export default ProfileInfo;