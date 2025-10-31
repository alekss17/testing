import '../Styles/Home.css';
import Post from './Post';
import MypostsContainer from './MypostsContainer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    postData: state.ProfileReducer.postData
  };
};

const Home = (props) => {
  const postMapping = props.postData.map((d, index) => (
    <Post key={index} message={d.message} likescount={d.likescount} />
  ));

  return (
    <>
      <MypostsContainer />
      {postMapping}
    </>
  );
};

export default connect(mapStateToProps)(Home);
