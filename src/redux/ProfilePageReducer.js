import { ProfileApi } from '../DAL/api'

const ADDPOST = 'ProfilePage/ADD-POST'
const SETUSERPROFILE = 'ProfilePage/SET_USER_PROFILE'
const SETPROFILESTATUS = 'ProfilePage/SET_PROFILE_STATUS'
const DELETEDPOST = 'ProfilePage/DELETE_POST'
const SavePhoto = 'ProfilePage/SAVE_PHOTO'
const ToggleIsLProfile = 'ProfilePage/Toggle'

let initialState = {
  postData: [
    { id: 1, message: "Hi, how are you", likescount: 0 },
    { id: 2, message: "Hi", likescount: 0 },
    { id: 3, message: "Hohoho", likescount: 0 }
  ],
  profile: null,
  ProfileStatus: "",
  ProfileLoading: false
}


const ProfilePage = (state = initialState, action) => {
  switch (action.type) {
    case ADDPOST:
      const newPost = {
        id: state.postData.length + 1,
        message: action.newMessageBody,
        likescount: Math.random()
      };
      return {
        ...state,
        postData: [...state.postData, newPost]
      }
    case SETUSERPROFILE:
      return {
        ...state,
        profile: action.profile
      }
    case SETPROFILESTATUS:
      return {
        ...state,
        ProfileStatus: action.Status
      }

    case DELETEDPOST:
      return {
        ...state,
        postData: state.postData.filter(p => p.id !== action.PostId)
      }
    case SavePhoto:
      return {
        ...state,
        profile: {...state.profile, photos: action.photo}
      }
      case ToggleIsLProfile:
        return {
          ...state,
          ProfileLoading: action.bool
        }
    default: return state;
  }
}

export const addPostActionCreator = (newMessageBody) => {
  return {
    type: ADDPOST,
    newMessageBody
  }
}
export const SetUserProfile = (profile) => {
  return {
    type: SETUSERPROFILE, profile
  }
}
export const SetProfileStatus = (Status) => {
  return {
    type: SETPROFILESTATUS, Status
  }
}
export const deletePost = (PostId) => {
  return {
    type: DELETEDPOST, PostId
  }
}
export const SavePhotoSucess = (photo) => {
  return {
    type: SavePhoto, photo
  }
}
const ToggleIsLoadingProfile = (bool) => {
  return {
    type: ToggleIsLProfile, bool
  }
}


export const GetProfile = (userId) => async (dispatch) => {
  dispatch(ToggleIsLoadingProfile(false))

  let data = await ProfileApi.GetProfile(userId)

  const userProfile = data;
  dispatch(SetUserProfile(userProfile));

  dispatch(ToggleIsLoadingProfile(true))
}

export const GetProfilStatus = (userId) => async (dispatch) => {
  let data = await ProfileApi.GetProfileStatus(userId)

  const Status = data;
  dispatch(SetProfileStatus(Status))
}

export const UpdateProfileStats = (status) => async (dispatch) => {
  let data = await ProfileApi.UpdateProfileStatus(status)
  if (data.resultCode === 0) {
    dispatch(SetProfileStatus(status))
  }
}
export const savePhoto = (file) => async (dispatch) => {
  let data = await ProfileApi.savePhoto(file)

  if (data.resultCode === 0) {
    dispatch(SavePhotoSucess(data.data.photos))
  }
}


export default ProfilePage