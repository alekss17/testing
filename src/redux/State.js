let rerenderEntireTree = () => {
  console.log('state is changed');
}

let state = {
    dialogs: [
        {id: 1, name: 'Dimych - '},
        {id: 2, name: 'Andrey - '},
        {id: 3, name: 'Sveta - '},
        {id: 4, name: 'Sasha - '},
        {id: 5, name: 'Valera - '},
        {id: 6, name: 'Viktor - '},
      ],
      Messages: [
        {messages: ' hi'},
        {messages: ' How are it-kamasutra'},
        {messages: ' yo'},
        {messages: ' yo'},
        {messages: ' yo'},
        {messages: ' yo'},
      ],
    postData: [],
      newPostText: ''
}

window.state = state;

export let addPost = () => {
  let newPost = {
    message: state.newPostText,
    likescount: Math.random()
  };
  state.postData.push(newPost);
  rerenderEntireTree(state);
}


export let updateNewPostChange = (newText) => {
  state.newPostText = newText;
  rerenderEntireTree(state);
}

export default state;