import '../../Styles/Post.css'
import React from 'react';

interface Post {
    likescount: number;
    message: string;
    DeletePost: (ID: string) => void;
    id: string;
}


const Post = ({ likescount, message, DeletePost, id }: Post) => {
    return (
        <>
            <div>
                <div>
                    <div className="item">
                        <img className="post-img" src="https://www.meme-arsenal.com/memes/9e68a78a292b4ed1555a338561dca8c3.jpg" alt="" />
                        <p>{message}</p>
                    </div>
                    <p>likes: {likescount}</p>
                    <button onClick={() => DeletePost(id)}>DeletePost</button>
                </div>
            </div>
        </>
    )
}

export default Post;