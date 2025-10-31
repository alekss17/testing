import '../Styles/Myposts.css'

const Myposts = (props) => {

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
      <p>Home</p>
    <img className='img-gora' src='https://www.wearegecko.co.uk/media/50316/mountain-3.jpg'></img>
    <p>ava + description</p>
    <div className='PostsAddHome'>
        <div>
        <textarea className='TextAreaAddPost' onChange={onPostChange} placeholder='type your post'  value={props.newPostText} />
        </div>
        <div className='AddButtonPost'>
        <button className='GetPostButton' onClick={ addPost }>Send Message</button>
        </div>
      </div>
      </div>
    );
  };
  
  export default Myposts;
  