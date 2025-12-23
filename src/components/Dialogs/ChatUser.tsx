import { useParams } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { Message } from './DialogsMapsItems';
import { RootState } from '../../redux/redux-store';
import { MessagesType } from '../../types/Types';
import React from 'react';

interface ChatUserProps {
  DeleteMessage: (Id: string) => void;
}

const ChatUser = ({ DeleteMessage }:  ChatUserProps) => {
  const { userId } = useParams();

  const finnalUserId = userId || '1';

  const allMessages = useSelector((state: RootState) => state.DialogsReducer.Messages);

  const userMessages = allMessages.filter((m: MessagesType) => m.userId === Number(finnalUserId));

  return (
    <div>
      {userMessages.map((msg: MessagesType) => (
        <Message 
          key={msg.id} 
          id={msg.id} 
          messages={msg.messages} 
          DeleteMessage={DeleteMessage} 
        />
      ))}
    </div>
  );
};

export default ChatUser;