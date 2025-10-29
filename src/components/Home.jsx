import '../Styles/Home.css';
import Post from './Post';
import MypostsContainer from './MypostsContainer';

const Home = (props) => {
  let postmaping = props.store.getState().ProfileReducer.postData.map((d, index) => (
    <Post key={index} message={d.message} likescount={d.likescount} />
  ));  
    return (
        <>
       <MypostsContainer store={props.store} />
       {postmaping}
        </>
      
    );
  };
  
  export default Home;