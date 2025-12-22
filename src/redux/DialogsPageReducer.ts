import { v4 as uuidv4 } from 'uuid';

const addMessage = 'DialogsReducer/addMessage' as const;
const Delete = 'DialogsReducer/DeleteMessage' as const;


type DialogType = {
  id: string,
  name: string
}

type MessagesType = {
  id: string,
  messages: string,
  userId: string
}

let initialState = {
  dialogs: [
    { id: uuidv4(), name: 'Dimych - ' },
    { id: uuidv4(), name: 'Andrey - ' },
    { id: uuidv4(), name: 'Sveta - ' },
    { id: uuidv4(), name: 'Sasha - ' },
    { id: uuidv4(), name: 'Valera - ' },
    { id: uuidv4(), name: 'Viktor - ' }
  ] as Array<DialogType>,
  Messages: [
    { id: uuidv4(), messages: 'hi', userId: uuidv4() }
  ] as Array<MessagesType>
};

export type InitialStateType = typeof initialState;

export const onAddMessage = (onDialogBody: string, userId: string) => ({
  type: addMessage,
  onDialogBody,
  userId
});

const DeleteMessage = (MessageId: string) => ({
  type: Delete,
  MessageId
});

type ActionType =
  | ReturnType<typeof onAddMessage>
  | ReturnType<typeof DeleteMessage>;



const DialogsPageR = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case addMessage: {
      const newMessage = {
        id: uuidv4(),
        messages: action.onDialogBody,
        userId: action.userId
      };

      const updatedMessages = [...state.Messages, newMessage];
      return { ...state, Messages: updatedMessages };
    }

    case Delete: {
      const updatedMessages = state.Messages.filter(
        m => m.id !== action.MessageId
      );
      return { ...state, Messages: updatedMessages };
    }

    default:
      return state;
  }
};

export const DeleteMessageTH = (Id: string) => (dispatch: any) => {
  dispatch(DeleteMessage(Id));
};

export default DialogsPageR;