import ProfilePage from "./ProfilePageReducer"
import DialogsPageR from "./DialogsPageReducer"

let store = {
  _state: {
    DialogsPage: {
      dialogs: [
        { id: 1, name: 'Dimych - ' },
        { id: 2, name: 'Andrey - ' },
        { id: 3, name: 'Sveta - ' },
        { id: 4, name: 'Sasha - ' },
        { id: 5, name: 'Valera - ' },
        { id: 6, name: 'Viktor - ' },
      ],
      Messages: [
        { messages: ' hi' },
        { messages: ' How are it-kamasutra' },
        { messages: ' yo' },
        { messages: ' yo' },
        { messages: ' yo' },
        { messages: ' yo' },
      ],
      newDialogText: '',
    },
    ProfilePage: {
      postData: [],
      newPostText: ''
    },
    slideBar: {}
  },
  StateReturn() {
    return this._state
  },
  _callSubscriber() {
    console.log('state is changed');
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.ProfilePage = ProfilePage(this._state.ProfilePage, action)
    this._state.DialogsPage = DialogsPageR(this._state.DialogsPage, action)
    this._callSubscriber(this._state)
    }
}
  export default store;