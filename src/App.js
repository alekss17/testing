import './App.css';
import NavBar from './NavBar';
import Dialogs from './components/Dialogs';
import Music from './components/Music';
import Myposts from './components/Myposts';
import Settings from './components/Settings';
import Header from './components/header';
import Post from './components/Post';
import { Routes, Route, BrowserRouter } from 'react-router-dom';



const Homer = (props) => {
  let postmaping = props.postData.map((d, index) => <Post key={index} message={d.message} likescount={d.likescount} />)
  return(
    <div>
      <Myposts addPost={props.addPost} newPostText={props.newPostText} updateNewPostChange={props.updateNewPostChange}/>
        {postmaping}
  </div>
  )
}

function App(props) {
  return (
<BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className="main">
          <NavBar />
          <div className="content">
            <Routes>
            <Route path="/" element={<Homer className='Home' postData={props.appState.postData} addPost={props.addPost} updateNewPostChange={props.updateNewPostChange} />} />
            <Route path="/dialogs" element={<Dialogs dialogs={props.appState.dialogs}  MessagesData={props.appState.MessagesData} />} />
            <Route path="/myposts" element={<Myposts addPost={props.addPost} newPostText={props.appState.newPostText} updateNewPostChange={props.updateNewPostChange} />} />
            <Route path="/music" element={<Music MessagesData={props.appState.MessagesData} />} />
            <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;