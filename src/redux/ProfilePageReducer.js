import { ProfileApi } from '../DAL/api'

const ADDPOST = 'ADD-POST'
const SETUSERPROFILE = 'SET_USER_PROFILE'
const SETPROFILESTATUS = 'SET_PROFILE_STATUS'

let initialState = {
  postData: [ 
       { id: 1, message: "Hi, how are you", likescount: 12 }
    ],
    profile: null,
    ProfileStatus: "",
}


const ProfilePage = (state = initialState, action) => {
    switch (action.type) {
        case ADDPOST: 
        const newPost = {
            message: action.newMessageBody,
            likescount: Math.random()
        };
        return {
          ...state,
        postData: [...state.postData, newPost]
        }   
      case SETUSERPROFILE:
        return{
          ...state,
          profile: action.profile
        }
        case SETPROFILESTATUS:
          return {
            ...state,
            ProfileStatus: action.Status
          }
        default: return state;
    }
}

export const addPostActionCreator = (newMessageBody) => {
    return {
       type: 'ADD-POST',
       newMessageBody
     }}
export const SetUserProfile = (profile) => {
    return{
    type: SETUSERPROFILE, profile
  }}
export const SetProfileStatus = (Status) => {
  return{
  type: SETPROFILESTATUS, Status
}}

export const GetProfile = (userId) => (dispatch) => {
      ProfileApi.GetProfile(userId)
      .then(data => {
        const userProfile = data; 
        dispatch(SetUserProfile(userProfile));
      })
    }

export const GetProfilStatus = (userId) => (dispatch) => {
    ProfileApi.GetProfileStatus(userId)
    .then(data => {
      const Status = data;
      dispatch(SetProfileStatus(Status))
    })
  }

export const UpdateProfileStats = (status) => (dispatch) => {
  ProfileApi.UpdateProfileStatus(status).then(data => {
      if (data.resultCode === 0) {
      dispatch(SetProfileStatus(status))
      }
    })
  }
   

export default ProfilePage