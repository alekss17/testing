import React from "react"
const ADDPOST = 'ADD-POST'
const UPDATENEWPOSTCHANGE = 'UPDATE-NEW-POST-CHANGE'

let initialState = {
      postData: [ 
       { id: 1, message: 'Hi, how are you?', likescount: 12 }
    ],
      newPostText: ''
}


const ProfilePage = (state = initialState, action) => {
    switch (action.type) {
        case ADDPOST: 
        const newPost = {
            message: state.newPostText,
            likescount: Math.random()
        };
        return {
            ...state,
            postData: [...state.postData, newPost],
            newPostText: ''
        };    
        case UPDATENEWPOSTCHANGE:
    return {
        ...state,
        newPostText: action.newText
    };
        default: return state;
    }
}

export const addPostActionCreator = () => {
    return {
       type: 'ADD-POST'
   
     }}
   export const updateNewPostChangeActionCreator = (text) => {
     return{
     type: 'UPDATE-NEW-POST-CHANGE', newText: text
   }}
   

export default ProfilePage