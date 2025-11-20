import React, { Component } from 'react';
import '../Styles/Home.css';
import { connect } from 'react-redux';
import Profile from './Profile';
import axios from 'axios';
import { SetUserProfile } from '../redux/ProfilePageReducer';
import { useParams } from 'react-router-dom';

// Классический контейнер
class ProfileContainer extends Component {
  componentDidMount() {
    let { userId } = this.props; // получаем userId из пропсов
    if (!userId) {
      userId = 2;
    }
    axios.get(`http://localhost:3000/Profiles?userId=${userId}`)
      .then(response => {
        const userProfile = response.data[0]; 
        this.props.SetUserProfile(userProfile);
});
  }

  render() {
    return (
      <>
        <Profile {...this.props} profile={this.props.profile} />
      </>
    );
  }
}

// Функциональная обёртка для передачи useParams в класс
const ProfileContainerWrapper = (props) => {
  let { userId } = useParams(); // вытаскиваем userId из URL
  return <ProfileContainer {...props} userId={userId} />;
};

const mapStateToProps = (state) => ({
  profile: state.ProfileReducer.profile
});

export default connect(mapStateToProps, { SetUserProfile })(ProfileContainerWrapper);
