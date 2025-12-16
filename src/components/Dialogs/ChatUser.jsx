import { useParams, useOutletContext } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { Message } from './DialogsMapsItems';


const ChatUser = ({ DeleteMessage }) => {
  const { userId } = useParams();
  const { DeleteMessageTH } = useOutletContext();
  const finnalUserId = userId || 1
  const allMessages = useSelector(state => state.DialogsReducer.Messages);

  const userMessages = allMessages.filter(m => m.userId === Number(finnalUserId));

  return (
    <div>
      {userMessages.map(msg => (
        <Message 
          key={msg.id} 
          id={msg.id} 
          messages={msg.messages} 
          DeleteMessage={DeleteMessageTH} 
        />
      ))}
    </div>
  );
};

export default ChatUser;
