import '../App.css';

const Post2 = (props) => {
    return(
        <div>
            <div className="item">
            <img className="post-img" src="https://www.meme-arsenal.com/memes/9e68a78a292b4ed1555a338561dca8c3.jpg" alt="" />
            <p>{props.message}</p>          
        </div>
        <p>likes: {props.likescount}</p> 
        </div>
    )
}

export default Post2;