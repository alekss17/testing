import '../../Styles/Dialogs.css';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import AddDialogForm from '../Forms/AddDialogForm'


const Dialogs = ({dialogs, onAddMessage, DeleteMessageTH}) => {
    const { userId } = useParams(); 
    
    const addNewDialog = (values) => {
        const currentUserId = userId ? Number(userId) : 1; 
        onAddMessage(values.onDialogBody, currentUserId); 
    }

      const dialogsElements = dialogs.map((dialog) => (
        <div key={dialog.id}>
          <img 
            className="Dialog-faces" 
            src="https://www.meme-arsenal.com/memes/9e68a78a292b4ed1555a338561dca8c3.jpg" 
            alt="" 
          />
          <NavLink className="NAv" to={`${dialog.id}`}>{dialog.name}</NavLink>
        </div>
      ));
    
      return (
        <div className="dialog">
          <div className="Del">{dialogsElements}</div>
          <div className="mesD">
            <Outlet context={{ DeleteMessageTH }} />
          </div>
          <AddDialogForm onSubmit={addNewDialog}/>
        </div>
      );    
};

export default Dialogs;