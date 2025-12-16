import { connect } from 'react-redux';
import {addPostActionCreator, DeletePost} from '../../redux/ProfilePageReducer'
import Myposts from './Myposts';
import { compose } from 'redux';
import AuthRedirectComponent from '../../hoc/WithAuthNavigate'
import { getPostData } from '../../redux/selectors/MyPostsSelector';

let MapStateToProps = (state) => {
  return {
    postData: getPostData(state)
  }
}

const MypostsContainer = compose(
  connect(MapStateToProps, {addPost: addPostActionCreator, DeletePost }),
  AuthRedirectComponent
)(Myposts)
  
  export default MypostsContainer;
  