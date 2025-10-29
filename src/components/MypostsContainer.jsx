import {addPostActionCreator, updateNewPostChangeActionCreator} from '../redux/ProfilePageReducer'
import Myposts from './Myposts';

const MypostsContainer = (props) => {
  let stateReducer = props.store.getState().ProfileReducer

let addPost = () => {
  props.store.dispatch(addPostActionCreator());
}

let onPostChange = (text) => {
  props.store.dispatch(updateNewPostChangeActionCreator(text));
  }
    return <Myposts addPost={addPost} updateNewPostText={onPostChange} newPostText={stateReducer.newPostText}/>
  };
  
  export default MypostsContainer;
  