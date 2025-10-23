let rerenderEntireTree = () => {
  console.log('state is changed');
};

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
};

export const addPost = () => {
  const newPost = {
    message: state.newPostText,
    likescount: Math.random()
  };
  state.postData.push(newPost);
  state.newPostText = '';
  rerenderEntireTree();
};

export const updateNewPostChange = (newText) => {
  state.newPostText = newText;
  rerenderEntireTree();
};

export const addMessage = () => {
  const newdialog = {
    messages: state.newDialogText
  };
  state.Messages.push(newdialog);
  state.newDialogText = ''; 
  rerenderEntireTree();
};

export const updateNewDialogChange = (newText) => {
  state.newDialogText = newText;
  rerenderEntireTree();
};


export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;
