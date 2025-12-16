import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { InitializeApp } from './redux/appReducer';
import { connect } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppInitializedS } from './redux/selectors/appSelector';

import './Styles/App.css';

import NavBar from './NavBar';
import HeaderContainer from './components/Header/HeaderContainer';
import Test from './components/tests';
import Login from './components/Login/login';
import Preloader from './components/common/Preloader/Prelooader';
import store from './redux/redux-store';
import ChatUser from './components/Dialogs/ChatUser'
import Dialogs from './components/Dialogs/DialogsContainer';

import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import HelperSuspense from './components/common/Preloader/HelperSuspense';

const MypostsContainer = React.lazy(() => import('./components/Myposts/MypostsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));



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

  <Route path="/dialogs" element={<Dialogs />}>
    <Route path=":userId" element={<ChatUser />} />
  </Route>

            <Route path="/" element={<Navigate to="/profile" />} />

            <Route path="/profile/:userId?" element={<HelperSuspense Component={ProfileContainer} />} />

            <Route path="/myposts" element={<HelperSuspense Component={MypostsContainer} /> }/>

            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/test" element={<Test />} />

            <Route path="/users" element={<HelperSuspense Component={UsersContainer} />}/>

            <Route path="/login" element={<Login />} />

          </Routes>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    initialized: AppInitializedS(state)
  }
}

let AppContainer = connect(mapStateToProps, { InitializeApp })(App);

let SamurajJSApp = () => {
  return <HashRouter >
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </HashRouter>
}

export default SamurajJSApp;