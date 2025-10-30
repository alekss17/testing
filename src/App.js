import './Styles/App.css';
import NavBar from './NavBar';
import DialogsContainer from './components/DialogsContainer';
import Music from './components/Music';
import Settings from './components/Settings';
import Header from './components/header';
import Test from './components/tests';
import Home from './components/Home';
import { Routes, Route,} from 'react-router-dom';
import MypostsContainer from './components/MypostsContainer';

function App() {
  return (
      <div className="app-wrapper">

        <Header />
        <div className="main">
          <NavBar />
          <div className="content">
            <Routes>
            <Route path="/"element={<Home />}/>
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/myposts" element={<MypostsContainer />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/test" element={<Test />} />
            </Routes>
          </div>
        </div>
      </div>
  );
}


export default App;