import '../../Styles/Myposts.css'
import Post from './Post';
import AddMessageForm from '../Forms/AddMessageForm'

const Myposts = (props) => {
  const postMapping = props.postData.map((d, index) => (
    <Post key={index} message={d.message} likescount={d.likescount} />
  ));


  let addNewMessage = (values) => {
    props.addPost(values.newMessageBody)
  }


    return (
      <div>
        <AddMessageForm onSubmit={addNewMessage} />
      {postMapping}
      </div>
    );
  };

  
  export default Myposts;
  