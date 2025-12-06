import React, { Component } from 'react';
import '../../Styles/Home.css';
import { connect } from 'react-redux';
import Profile from './Profile';
import { GetProfile, GetProfilStatus, UpdateProfileStats } from '../../redux/ProfilePageReducer';
import { Navigate, useParams } from 'react-router-dom';

class ProfileContainer extends Component {

  componentDidMount() {
    if (!this.props.userId) return;

    this.props.GetProfile(this.props.userId);
    this.props.GetProfilStatus(this.props.userId);
  }
  render() {
              if (!this.props.isAuth && !this.props.isAuthChecking) {
                  return <Navigate to="/login" replace />
              }
    return (
      <>
        <Profile {...this.props}/>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.ProfileReducer.profile,
  profileStatus: state.ProfileReducer.ProfileStatus,
  isAuth: state.auth.isAuth,
  isAuthChecking: state.auth.isAuthChecking,
  AutorizedUserId: state.auth.userId
});

const ProfileContainerWrapper = (props) => {
  let { userId } = useParams();
  if (!userId) {
    userId = props.AutorizedUserId;
  }
  return <ProfileContainer {...props} userId={userId} />;
}

export default connect(mapStateToProps, { GetProfile, GetProfilStatus, UpdateProfileStats })(ProfileContainerWrapper)