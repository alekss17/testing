import '../../Styles/Home.css';
import MypostsContainer from '../Myposts/MypostsContainer';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {
  
  return (
    <>
      <ProfileInfo isOwner={props.isOwner} {...props} />
      <MypostsContainer />
    </>
  );
};

export default Profile;
