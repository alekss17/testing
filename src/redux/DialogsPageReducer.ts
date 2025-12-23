import { v4 as uuidv4 } from 'uuid';
import { DialogType, MessagesType } from '../types/Types';

const addMessage = 'DialogsReducer/addMessage' as const;
const Delete = 'DialogsReducer/DeleteMessage' as const;

let initialState = {
  dialogs: [
    { id: 1, name: 'Dimych - ' },
    { id: 2, name: 'Andrey - ' },
    { id: 3, name: 'Sveta - ' },
    { id: 4, name: 'Sasha - ' },
    { id: 5, name: 'Valera - ' },
    { id: 6, name: 'Viktor - ' }
  ] as Array<DialogType>,
  Messages: [
    { id: uuidv4(), messages: 'hi', userId: 1 }
  ] as Array<MessagesType>
};

export type InitialStateType = typeof initialState;


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

export const onAddMessage = (onDialogBody: string, userId: number) => ({
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


export const DeleteMessageTH = (Id: string) => (dispatch: any) => {
  dispatch(DeleteMessage(Id));
};

export default DialogsPageR;