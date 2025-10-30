import MyContext from '../ContextApi';
import {addPostActionCreator, updateNewPostChangeActionCreator} from '../redux/ProfilePageReducer'
import Myposts from './Myposts';

const MypostsContainer = () => {
  return ( 
  <MyContext.Consumer>
    { 
    store => {
        let stateReducer = store.getState().ProfileReducer

        let addPost = () => {
          store.dispatch(addPostActionCreator());
        }
        
        let onPostChange = (text) => {
          store.dispatch(updateNewPostChangeActionCreator(text));
          }
          return(
      <Myposts addPost={addPost} updateNewPostText={onPostChange} newPostText={stateReducer.newPostText}/>
          )
    }
    }
    </MyContext.Consumer>
)};
  
  export default MypostsContainer;
  