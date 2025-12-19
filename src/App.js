import React, { useEffect } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { InitializeApp, ToogleErrorTH } from './redux/appReducer';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { AppInitialized, GlobalErr } from './redux/selectors/appSelector';

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
  const catchAllUnhandleErrors = (event) => {
    const message =
      event.reason?.response?.data?.message ||
      event.reason?.message ||
      "Unhandled promise rejection";
  
    props.ToogleErrorTH(message);
  };


  useEffect(() => {
    props.InitializeApp()

    window.addEventListener("unhandledrejection", catchAllUnhandleErrors)

    return () => {
      window.removeEventListener("unhandledrejection", catchAllUnhandleErrors)
    }
  }, [])

  if (!props.initialized) {
    return <Preloader />
  }

  return (
    <div className="app-wrapper">
      <div className='ContainerGlobalEror'>
        <h1 className='GlobalError'>{props.err}</h1>
      </div>
      <HeaderContainer />
      <div className="main">
        <NavBar />

        <div className="content">
          <Routes>

            <Route path="/dialogs" element={<Dialogs />}>
              <Route path=":userId" element={<ChatUser />} />
            </Route>

            <Route path="/profile/:userId?" element={<HelperSuspense Component={ProfileContainer} />} />

            <Route path="/myposts" element={<HelperSuspense Component={MypostsContainer} />} />

            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/test" element={<Test />} />

            <Route path="/users" element={<HelperSuspense Component={UsersContainer} />} />

            <Route path="/login" element={<Login />} />

            <Route exact path="/" element={<Navigate to="/profile" />} />

            <Route path='*' element={<div>404 NOT FOUND</div>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    initialized: AppInitialized(state),
    err: GlobalErr(state)
  }
}

let AppContainer = connect(mapStateToProps, { InitializeApp, ToogleErrorTH })(App);

let SamurajJSApp = () => {
  return <BrowserRouter >
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default SamurajJSApp;