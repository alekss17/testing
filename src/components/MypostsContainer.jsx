import { connect } from 'react-redux';
import {addPostActionCreator, updateNewPostChangeActionCreator} from '../redux/ProfilePageReducer'
import Myposts from './Myposts';


let MapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostChangeActionCreator(text));
      }
  }
}

let MapStateToProps = (state) => {
  return {
    newPostText: state.ProfileReducer.newPostText
  }
}

const MypostsContainer = connect(MapStateToProps, MapDispatchToProps)(Myposts)
  
  export default MypostsContainer;
  