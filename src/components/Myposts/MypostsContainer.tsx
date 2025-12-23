import { connect } from 'react-redux';
import { addPostActionCreator, DeletePost } from '../../redux/ProfilePageReducer';
import Myposts from './Myposts';
import { getPostData } from '../../redux/selectors/MyPostsSelector';
import { RootState } from '../../redux/redux-store';

const MapStateToProps = (state: RootState) => {
  return {
    postData: getPostData(state)
  }
}

const MypostsContainer = connect(MapStateToProps, {
  addPost: addPostActionCreator, 
  DeletePost 
})(Myposts);
  
export default MypostsContainer;