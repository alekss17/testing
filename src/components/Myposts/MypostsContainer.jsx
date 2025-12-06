import { connect } from 'react-redux';
import {addPostActionCreator} from '../../redux/ProfilePageReducer'
import Myposts from './Myposts';

let MapStateToProps = (state) => {
  return {
    postData: state.ProfileReducer.postData
  }
}

const MypostsContainer = connect(MapStateToProps, {addPost: addPostActionCreator, })(Myposts)
  
  export default MypostsContainer;
  