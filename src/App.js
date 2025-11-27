import './Styles/App.css';
import NavBar from './NavBar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import HeaderContainer from './components/Header/HeaderContainer';
import Test from './components/tests';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Routes, Route } from 'react-router-dom';
import MypostsContainer from './components/Myposts/MypostsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/login'

function App() {
  return (
      <div className="app-wrapper">
        <HeaderContainer />
        <div className="main">
          <NavBar />
          <div className="content">
            <Routes>
            <Route path="/profile/:userId?"element={<ProfileContainer />}/>
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/myposts" element={<MypostsContainer />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/test" element={<Test />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/login' element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
  );
}


export default App;