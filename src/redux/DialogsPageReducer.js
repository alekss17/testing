const addMessage = 'DialogsReducer/addMessage';
const Delete = 'DialogsReducer/DeleteMessage'

const savedDialogs = JSON.parse(localStorage.getItem('dialogs')) || [
  { id: 1, name: 'Dimych - ' },
  { id: 2, name: 'Andrey - ' },
  { id: 3, name: 'Sveta - ' },
  { id: 4, name: 'Sasha - ' },
  { id: 5, name: 'Valera - ' },
  { id: 6, name: 'Viktor - ' }
];

const savedMessages = JSON.parse(localStorage.getItem('Messages')) || [
  { id: 1, messages: 'hi' }
];

let initialState = {
  dialogs: savedDialogs,
  Messages: savedMessages
}

const DialogsPageR = (state = initialState, action) => {
  switch(action.type) {
    case addMessage: {
      const newDialog = {
        id: Date.now(),
        messages: action.onDialogBody,
        userId: action.userId
      };
      const updatedMessages = [...state.Messages, newDialog];
      localStorage.setItem('Messages', JSON.stringify(updatedMessages));
      return { ...state, Messages: updatedMessages };
    }
    
    case Delete: {
      const updatedMessages = state.Messages.filter(m => m.id !== action.MessageId);
      localStorage.setItem('Messages', JSON.stringify(updatedMessages));
      return { ...state, Messages: updatedMessages };
    }
    default: 
      return state;
  }
}

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
  dispatch(DeleteMessage(Id))
}

export default DialogsPageR;
