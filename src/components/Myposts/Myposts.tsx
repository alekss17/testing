import React from 'react';
import '../../Styles/Myposts.css'
import Post from './Post';
import AddMessageForm from '../Forms/AddMessageForm'
import { AddMessageFormValues } from '../../types/Types';

interface postData {
  id: string;
  message: string;
  likescount: number;
}

interface MypostsProps {
  postData: postData[];
  DeletePost: (PostId: string) => void;
  addPost: (newMessageBody: string) => void
}

const Myposts = React.memo((props: MypostsProps) => {
  const postMapping = props.postData.map((d) => (
    <Post id={d.id} DeletePost={props.DeletePost} key={d.id} message={d.message} likescount={d.likescount} />
));

  let addNewMessage = (values: AddMessageFormValues) => {
    props.addPost(values.newMessageBody)
}

    return (
      <div>
        <AddMessageForm onSubmit={addNewMessage} />
      {postMapping}
      </div>
    );
});

  
  export default Myposts;
  