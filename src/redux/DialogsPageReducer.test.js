import DialogsPageR, {onAddMessage} from './DialogsPageReducer'

let state = {
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

test('on add new message dialog', () => {
  const action = onAddMessage(' Hello')

  const newState = DialogsPageR(state, action)

  expect(newState.Messages.length).toBe(2)

})