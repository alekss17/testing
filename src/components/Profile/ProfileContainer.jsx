import React, { Component } from 'react';
import '../../Styles/Home.css';
import { connect } from 'react-redux';
import Profile from './Profile';
import { GetProfile } from '../../redux/ProfilePageReducer';
import { useParams } from 'react-router-dom';
import AuthRedirectComponent from '../../hoc/WithAuthNavigate'
import { compose } from 'redux';

class ProfileContainer extends Component {
  componentDidMount() {
    let { userId } = this.props; 
    if (!userId) {
      userId = 2;
    }
    this.props.GetProfile(userId)
  }

  render() {
    return (
      <>
        <Profile {...this.props} profile={this.props.profile} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.ProfileReducer.profile,
  isAuth: state.auth.isAuth
});

const ProfileContainerWrapper = (Component) => {
  let Wrapper = (props) => {
  let { userId } = useParams();
  return <Component {...props} userId={userId} />;
  }
  return Wrapper
}

export default compose(
  connect(mapStateToProps, { GetProfile }),
  ProfileContainerWrapper,
  AuthRedirectComponent
)(ProfileContainer);