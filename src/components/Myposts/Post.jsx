import '../../Styles/Post.css'

const Post = (props) => {
    const {likescount, message, DeletePost, id} = props;

    return(
        <>
        <div>        
            <div className="item">
            <img className="post-img" src="https://www.meme-arsenal.com/memes/9e68a78a292b4ed1555a338561dca8c3.jpg" alt="" />
            <p>{message}</p>
            </div>
            <p>likes: {likescount}</p>
            <button onClick={() => DeletePost(id)}>DeletePost</button>
        </div>
        </>
    )
}

export default Post;