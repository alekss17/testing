import '../Styles/Home.css';
import Post from './Post';
import MypostsContainer from './MypostsContainer';
import MyContext from '../ContextApi';

const Home = () => {
    return (
      <MyContext.Consumer>
        { 
        store => {
            let postmaping = store.getState().ProfileReducer.postData.map((d, index) => (
              <Post key={index} message={d.message} likescount={d.likescount} />
            )); 
            return ( 
        <>
       <MypostsContainer />
       {postmaping}
        </>
            )
    }
}
        </MyContext.Consumer>
      
    );
  };
  
  export default Home;