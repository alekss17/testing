import { v4 as uuidv4 } from 'uuid';

const addMessage = 'DialogsReducer/addMessage';
const Delete = 'DialogsReducer/DeleteMessage';

// УБРАЛИ localStorage отсюда
let initialState = {
  dialogs: [
    { id: 1, name: 'Dimych - ' },
    { id: 2, name: 'Andrey - ' },
    { id: 3, name: 'Sveta - ' },
    { id: 4, name: 'Sasha - ' },
    { id: 5, name: 'Valera - ' },
    { id: 6, name: 'Viktor - ' }
  ],
  Messages: [
    { id: uuidv4(), messages: 'hi', userId: uuidv4() }
  ]
};

const DialogsPageR = (state = initialState, action) => {
  switch (action.type) {
    case addMessage: {
      const newMessage = {
        id: uuidv4(), 
        messages: action.onDialogBody,
        userId: action.userId
      };

      const updatedMessages = [...state.Messages, newMessage];
      // УБРАЛИ localStorage.setItem отсюда

      return { ...state, Messages: updatedMessages };
    }

    case Delete: {
      const updatedMessages = state.Messages.filter(
        m => m.id !== action.MessageId
      );

      // УБРАЛИ localStorage.setItem отсюда
      return { ...state, Messages: updatedMessages };
    }

    default:
      return state;
  }
};

export const onAddMessage = (onDialogBody, userId) => ({
  type: addMessage,
  onDialogBody,
  userId
});

const DeleteMessage = (MessageId) => ({
  type: Delete,
  MessageId
});

export const DeleteMessageTH = (Id) => (dispatch) => {
  dispatch(DeleteMessage(Id));
};

export default DialogsPageR;