import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Profile from './Profile';
import { GetProfile, GetProfilStatus, UpdateProfileStats, savePhoto, saveProfile } from '../../redux/ProfilePageReducer';
import { AppDispatch, RootState } from '../../redux/redux-store';

const ProfileContainer = () => {
  const { userId: urlUserId } = useParams();
  const dispatch: AppDispatch = useDispatch();
  
  const meId = useSelector((state: RootState) => state.auth.userId);
  const profile = useSelector((state: RootState) => state.ProfileReducer.profile);
  const profileStatus = useSelector((state: RootState) => state.ProfileReducer.ProfileStatus);
  const ProfileLoading = useSelector((state: RootState) => state.ProfileReducer.ProfileLoading);
  
  const userId = urlUserId ? Number(urlUserId) : meId;
  const isOwner = meId === userId;
  
  useEffect(() => {
    if (userId) {
      dispatch(GetProfile(userId));
      dispatch(GetProfilStatus(userId));
    }
  }, [userId, dispatch]);
  
  return (
    <Profile 
      isOwner={isOwner}
      profile={profile}
      profileStatus={profileStatus}
      ProfileLoading={ProfileLoading}
      UpdateProfileStats={(status) => dispatch(UpdateProfileStats(status))}
      savePhoto={(file) => dispatch(savePhoto(file))}
      saveProfile={(profile) => dispatch(saveProfile(profile))}
    />
  );
};

export default ProfileContainer;