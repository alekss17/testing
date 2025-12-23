import '../../Styles/Dialogs.css';
import { NavLink, useParams } from 'react-router-dom';
import AddDialogForm from '../Forms/AddDialogForm';
import ChatUser from './ChatUser';
import { DialogFormValues, DialogType } from '../../types/Types';
import React from 'react';

interface DialogsProps {
  dialogs: DialogType[];
  onAddMessage: (onDialogBody: string, userId: number) => void;
  DeleteMessageTH: (Id: string) => void;
}

const Dialogs = ({ dialogs, onAddMessage, DeleteMessageTH }: DialogsProps) => {
    const { userId } = useParams(); 
    
    const addNewMessage = (values: DialogFormValues) => {
        const currentUserId = userId ? Number(userId) : 1; 
        onAddMessage(values.onDialogBody, currentUserId); 
    };

    const dialogsElements = dialogs.map((dialog: DialogType) => (
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
            <ChatUser DeleteMessage={DeleteMessageTH} />
          </div>
          <AddDialogForm onSubmit={addNewMessage}/>
        </div>
    );    
};

export default Dialogs;