import React from 'react';
import '../App.css';

const Myposts = (props) => {
  let NewPostelement = React.createRef();

  let addPost = () => {
    if (addPost === '') {return;}
    props.addPost();
    NewPostelement.current.value = '';
  }

  let onPostChange = () => {
    let text = NewPostelement.current.value;
    props.updateNewPostChange(text);
    }
    return (
      <div>
      <p>Home</p>
    <img className='img-gora' src='https://www.wearegecko.co.uk/media/50316/mountain-3.jpg'></img>
    <p>ava + description</p>
        <div>
        <textarea onChange={onPostChange} ref={NewPostelement} placeholder='type your post'  value={props.newPostText} />
        </div>
        <div>
        <button onClick={ addPost }>Send Message</button>
        </div>
      </div>
    );
  };
  
  export default Myposts;
  