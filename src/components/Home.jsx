import '../Styles/Home.css';
import Post from './Post';
import Myposts from './Myposts';

const Home = (props) => {
  let postmaping = props.appState.postData.map((d, index) => (
    <Post key={index} message={d.message} likescount={d.likescount} />
  ));  
    return (
        <>
       <Myposts addPost={props.addPost} newPostText={props.appState.newPostText} updateNewPostChange={props.updateNewPostChange}/>
       {postmaping}
        </>
      
    );
  };
  
  export default Home;