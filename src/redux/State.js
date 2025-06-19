
let State = {
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
      ]
}

export let addPost = (postMessage) => {
  let newPost = {
    message: postMessage,
    likescount: 4
  };
  State.postData.push(newPost);
}

export default State;