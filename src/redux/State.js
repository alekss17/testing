let rerenderEntireTree = () => {
  console.log('state is changed');
}

let state = {
    dialogs: [
        {id: 1, name: 'Dimych-', messages: 'hi'},
        {id: 2, name: 'Andrey-', messages: 'How are it-kamasutra'},
        {id: 3, name: 'Sveta-', messages: 'yo'},
        {id: 4, name: 'Sasha-', messages: 'yo'},
        {id: 5, name: 'Valera-', messages: 'yo'},
        {id: 6, name: 'Viktor-', messages: 'yo'},
      ],
    postData: [
        {message: 'Hi, hove are you?', likescount: '0'},
        {message: 'It`s my first post', likescount: '23'},
        {message: 'Hi, hove are you?', likescount: '12'},
        {message: 'It`s my first post', likescount: '35'},
      ],
      newPostText: ''
}

window.state = state;

export let addPost = () => {
  let newPost = {
    message: state.newPostText,
    likescount: 4
  };
  state.postData.push(newPost);
  rerenderEntireTree(state);
}
export let updateNewPostChange = (newText) => {
  state.newPostText = newText;
  rerenderEntireTree(state);
}

export default state;