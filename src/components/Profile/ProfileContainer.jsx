import React, { Component } from 'react';
import '../../Styles/Home.css';
import { connect } from 'react-redux';
import Profile from './Profile';
import { GetProfile, GetProfilStatus, UpdateProfileStats, savePhoto } from '../../redux/ProfilePageReducer';
import { useParams } from 'react-router-dom';
import { compose } from 'redux';
import AuthRedirectComponent from '../../hoc/WithAuthNavigate';

class ProfileContainer extends Component {
  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps) {
    if (this.props.userId !== prevProps.userId) {
      this.refreshProfile();
    }
  }

  refreshProfile() {
    if (!this.props.userId) return;
    this.props.GetProfile(this.props.userId);
    this.props.GetProfilStatus(this.props.userId);
  }

  isOwner() {
    if (this.props.meId === this.props.userId) {
      return true
    }
  }

  render() {
    return (
      <Profile 
      isOwner={this.isOwner()}
        meId={this.props.meId} 
        userId={this.props.userId} 
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.ProfileReducer.profile,
  profileStatus: state.ProfileReducer.ProfileStatus,
  isAuth: state.auth.isAuth,
  isAuthChecking: state.auth.isAuthChecking,
  meId: state.auth.userId,
  ProfileLoading: state.ProfileReducer.ProfileLoading
});

// Сначала оборачиваем классовый компонент через compose
const ConnectedProfileContainer = compose(
  connect(mapStateToProps, { GetProfile, GetProfilStatus, UpdateProfileStats, savePhoto }),
  AuthRedirectComponent
)(ProfileContainer);

// Затем создаём обёртку для useParams
const ProfileContainerWrapper = (props) => {
  const { userId } = useParams();
  const finalUserId = userId || props.meId;
  
  return <ConnectedProfileContainer {...props} userId={finalUserId} />;
};

// Подключаем redux к обёртке для доступа к AutorizedUserId
export default connect(
  (state) => ({
    meId: state.auth.userId
  })
)(ProfileContainerWrapper);