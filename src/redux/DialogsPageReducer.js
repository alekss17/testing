const addMessage = 'addMessage'
const updateNewDialogChange = 'updateNewDialogChange'

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
  newDialogText: '',
}

const DialogsPageR = (state = initialState, action) => {

    switch(action.type) {
        case addMessage:
          const newDialog = { messages: state.newDialogText };
          return {
            ...state,
          Messages: [...state.Messages, newDialog],
          newDialogText: ''
          }
      case updateNewDialogChange:
        return {
          ...state,
          newDialogText: action.newMessageText
          }
    default: return state
    }
}

export const onAddMessage = () => {
  return {
     type: 'addMessage'
   }}
 export const onDialogChange = (text) => {
   return{
   type: 'updateNewDialogChange', newMessageText: text
 }}

export default DialogsPageR;