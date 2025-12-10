import './Styles/App.css';
import NavBar from './NavBar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
// import HeaderContainer from './components/He';
import Test from './components/tests';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Routes, Route, Navigate } from 'react-router-dom';
import MypostsContainer from './components/Myposts/MypostsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/login';
import { useEffect } from 'react';
import { InitializeApp } from './redux/appReducer';
import { connect } from 'react-redux';
import Preloader from './components/common/Preloader/Prelooader';

function App(props) {

  useEffect(() => {
    props.InitializeApp()
  }, [])
  
  if (!props.initialized) {
    return <Preloader />
  }

  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <div className="main">
        <NavBar />

        <div className="content">
          <Routes>

            {/* Главная — редирект на профиль */}
            <Route path="/" element={<Navigate to="/profile" />} />

            <Route path="/profile/:userId?" element={<ProfileContainer />} />
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/myposts" element={<MypostsContainer />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/test" element={<Test />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<Login />} />

            {/* 404 */}
            <Route path="*" element={<div>404 Not Found</div>} />

          </Routes>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
  initialized: state.app.initialized
  }
}

export default connect(mapStateToProps, { InitializeApp })(App);