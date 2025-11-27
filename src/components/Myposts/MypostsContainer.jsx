import { connect } from 'react-redux';
import {addPostActionCreator, updateNewPostChangeActionCreator} from '../../redux/ProfilePageReducer'
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
    newPostText: state.ProfileReducer.newPostText,
    postData: state.ProfileReducer.postData
  }
}

const MypostsContainer = connect(MapStateToProps, MapDispatchToProps)(Myposts)
  
  export default MypostsContainer;
  