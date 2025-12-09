import { connect } from 'react-redux';
import {addPostActionCreator} from '../../redux/ProfilePageReducer'
import Myposts from './Myposts';
import { compose } from 'redux';
import AuthRedirectComponent from '../../hoc/WithAuthNavigate'

let MapStateToProps = (state) => {
  return {
    postData: state.ProfileReducer.postData
  }
}

const MypostsContainer = compose(
  connect(MapStateToProps, {addPost: addPostActionCreator, }),
  AuthRedirectComponent
)(Myposts)
  
  export default MypostsContainer;
  