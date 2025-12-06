const addMessage = 'addMessage'

let initialState = {
  dialogs: [
    { id: 1, name: 'Dimych - ' },
    { id: 2, name: 'Andrey - ' },
    { id: 3, name: 'Sveta - ' },
    { id: 4, name: 'Sasha - ' },
    { id: 5, name: 'Valera - ' },
    { id: 6, name: 'Viktor - ' },
  ],
  Messages: [
    { messages: ' hi' } 
  ],
}

const DialogsPageR = (state = initialState, action) => {

    switch(action.type) {
        case addMessage:
          const newDialog = { messages: action.onDialogBody };
          return {
            ...state,
          Messages: [...state.Messages, newDialog],
          }
    default: return state
    }
}

export const onAddMessage = (onDialogBody) => {
  return {
     type: 'addMessage',
     onDialogBody
   }}

export default DialogsPageR;