import '../../Styles/Home.css';
import MypostsContainer from '../Myposts/MypostsContainer';
import ProfileInfo from './ProfileInfo';
import { ProfileTypeProps } from '../../types/Types';

const Profile = (props: ProfileTypeProps) => {
  return (
    <>
      <ProfileInfo {...props} />
      <MypostsContainer />
    </>
  );
};

export default Profile;
