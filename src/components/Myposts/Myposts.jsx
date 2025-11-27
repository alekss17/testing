import '../../Styles/Myposts.css'
import Post from './Post';

const Myposts = (props) => {
  const postMapping = props.postData.map((d, index) => (
    <Post key={index} message={d.message} likescount={d.likescount} />
  ));

let addPost = (e) => {
  if (!props.newPostText.trim()) return;
  props.addPost()
  e.target.value = '';
}

let onPostChange = (e) => {
  let text = e.target.value;
  props.updateNewPostText(text)
  }

    return (
      <div>
    <div className='PostsAddHome'>
        <div>
        <textarea className='TextAreaAddPost' onChange={onPostChange} placeholder='type your post'  value={props.newPostText} />
        </div>
        <div className='AddButtonPost'>
        <button className='GetPostButton' onClick={ addPost }>Send Message</button>
        </div>
      </div>
      {postMapping}
      </div>
    );
  };
  
  export default Myposts;
  