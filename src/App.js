import './Styles/App.css';
import NavBar from './NavBar';
import DialogsContainer from './components/DialogsContainer';
import Music from './components/Music';
import Settings from './components/Settings';
import Header from './components/Header';
import Test from './components/tests';
import ProfileContainer from './components/ProfileContainer';
import { Routes, Route } from 'react-router-dom';
import MypostsContainer from './components/MypostsContainer';
import UsersContainer from './components/UsersContainer';

function App() {
  return (
      <div className="app-wrapper">
        <Header />
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
            </Routes>
          </div>
        </div>
      </div>
  );
}


export default App;