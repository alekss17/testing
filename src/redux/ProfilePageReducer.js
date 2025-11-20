const ADDPOST = 'ADD-POST'
const UPDATENEWPOSTCHANGE = 'UPDATE-NEW-POST-CHANGE'
const SETUSERPROFILE = 'SET_USER_PROFILE'

let initialState = {
  postData: [ 
       { id: 1, message: 'Hi, how are you?', likescount: 12 }
    ],
    profile: null,
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
        }   
        case UPDATENEWPOSTCHANGE:
          return {
          ...state,
        newPostText: action.newText
      }
      case SETUSERPROFILE:
        return{
          ...state,
          profile: action.profile
        }
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
export const SetUserProfile = (profile) => {
    return{
    type: SETUSERPROFILE, profile
  }}
   

export default ProfilePage