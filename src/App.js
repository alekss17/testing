import './Styles/App.css';
import NavBar from './NavBar';
import Dialogs from './components/Dialogs';
import Music from './components/Music';
import Myposts from './components/Myposts';
import Settings from './components/Settings';
import Header from './components/header';
import Test from './components/tests';
import Home from './components/Home';
import { Routes, Route,} from 'react-router-dom';

function App(props) {

  return (
      <div className="app-wrapper">

        <Header />
        <div className="main">
          <NavBar />
          <div className="content">
            <Routes>
            <Route path="/"element={<Home appState={props.appState} addPost={props.addPost} updateNewPostChange={props.updateNewPostChange}  />}/>
            <Route path="/dialogs" element={<Dialogs dialogs={props.appState.dialogs} dialogsMessages={props.appState.Messages} updateNewDialogChange={props.updateNewDialogChange} addMessage={props.addMessage} newDialogText={props.appState.newDialogText} />} />
            <Route path="/myposts" element={<Myposts addPost={props.addPost}  newPostText={props.appState.newPostText} updateNewPostChange={props.updateNewPostChange} />} />
            <Route path="/music" element={<Music MessagesData={props.appState.MessagesData} />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/test" element={<Test />} />
            </Routes>
          </div>
        </div>
      </div>
  );
}


export default App;