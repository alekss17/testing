import React, { useEffect } from 'react';
import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import { InitializeApp, ToogleErrorTH } from './redux/appReducer';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AppInitialized, GlobalErr } from './redux/selectors/appSelector';
import { DeleteMessageTH } from './redux/DialogsPageReducer';

import './Styles/App.css';

import NavBar from './NavBar';
import HeaderContainer from './components/Header/HeaderContainer';
import TestForProps from './components/tests';
import Login from './components/Login/login';
import Preloader from './components/common/Preloader/Prelooader';
import store, { persistor, RootState } from './redux/redux-store';
import ChatUser from './components/Dialogs/ChatUser';
import Dialogs from './components/Dialogs/DialogsContainer';

import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import HelperSuspense from './components/common/Preloader/HelperSuspense';

const MypostsContainer = React.lazy(() => import('./components/Myposts/MypostsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

interface AppPropsType {
  initialized: boolean
  err: string | null
  InitializeApp: () => void
  ToogleErrorTH: (err: string | null) => void
}

function App(props: AppPropsType) {
  const catchAllUnhandleErrors = (event: PromiseRejectionEvent) => {
    const reason = event.reason;
    
    const message =
      reason?.response?.data?.message ||
      reason?.message ||
      (typeof reason === 'string' ? reason : null) ||
      "Unhandled promise rejection";
  
    props.ToogleErrorTH(message);
  };

  useEffect(() => {
    props.InitializeApp();

    window.addEventListener("unhandledrejection", catchAllUnhandleErrors);

    return () => {
      window.removeEventListener("unhandledrejection", catchAllUnhandleErrors);
    };
  }, []);

  if (!props.initialized) {
    return <Preloader />;
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
              <Route path=":userId" element={<ChatUser DeleteMessage={DeleteMessageTH} />} />
            </Route>

            <Route path="/profile/:userId?" element={<HelperSuspense Component={ProfileContainer} />} />

            <Route path="/myposts" element={<HelperSuspense Component={MypostsContainer} />} />

            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/test" element={<TestForProps />} />

            <Route path="/users" element={<HelperSuspense Component={UsersContainer} />} />

            <Route path="/login" element={<Login />} />

            <Route path="/" element={<Navigate to="/profile" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    initialized: AppInitialized(state),
    err: GlobalErr(state)
  };
};

let AppContainer = connect(mapStateToProps, { InitializeApp, ToogleErrorTH })(App);

let SamurajJSApp = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <PersistGate loading={<Preloader />} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    </HashRouter>
  );
};

export default SamurajJSApp;