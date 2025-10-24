let store = {
  _state: {
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
      postData: [],
      newPostText: '',
      newDialogText: '',
  },
  StateReturn() {
    return this._state
  },
  _callSubscriber() {
    console.log('state is changed');
  },
  addPost() {
    debugger;
    const newPost = {
      message: this._state.newPostText,
      likescount: Math.random()
    };
    this._state.postData.push(newPost);
    this._state.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostChange(newText) {
    this._state.newPostText = newText;
    this._callSubscriber(this._state);
  },
  
  addMessage() {
    const newdialog = {
      messages: this._state.newDialogText
    };
    this._state.Messages.push(newdialog);
    this._state.newDialogText = ''; 
    this._callSubscriber(this._state);
  },
  
  updateNewDialogChange(newText) {
    this._state.newDialogText = newText;
    this._callSubscriber(this._state);
  },
  
  subscribe(observer) {
    this._callSubscriber = observer;
  }}
  export default store;