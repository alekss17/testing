import '../../Styles/Home.css';
import MypostsContainer from '../Myposts/MypostsContainer';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {
  return (
    <>
      <ProfileInfo profile={props.profile}/>
      <MypostsContainer />
    </>
  );
};

export default Profile;
