import { ProfileApi } from '../DAL/api';
import { v4 as uuidv4 } from 'uuid';

const ADDPOST = 'ProfilePage/ADD-POST';
const SETUSERPROFILE = 'ProfilePage/SET_USER_PROFILE';
const SETPROFILESTATUS = 'ProfilePage/SET_PROFILE_STATUS';
const DELETEDPOST = 'ProfilePage/DELETE_POST';
const SavePhoto = 'ProfilePage/SAVE_PHOTO';
const ToggleIsLProfile = 'ProfilePage/Toggle';

const savedPosts = JSON.parse(localStorage.getItem('postData')) || [
  { id: uuidv4(), message: "Hi, how are you", likescount: 0 },
  { id: uuidv4(), message: "Hi", likescount: 0 },
  { id: uuidv4(), message: "Hohoho", likescount: 0 }
];

let initialState = {
  postData: savedPosts,
  profile: null,
  ProfileStatus: "",
  ProfileLoading: false
};

const ProfilePage = (state = initialState, action) => {
  switch (action.type) {

    case ADDPOST: {
      const newPost = {
        id: uuidv4(),
        message: action.newMessageBody,
        likescount: 0
      };
      const updatedPosts = [...state.postData, newPost];
      
      localStorage.setItem('postData', JSON.stringify(updatedPosts));

      return { ...state, postData: updatedPosts };
    }

    case DELETEDPOST: {
      const updatedPosts = state.postData.filter(p => p.id !== action.PostId);
      localStorage.setItem('postData', JSON.stringify(updatedPosts));
      return { ...state, postData: updatedPosts };
    }

    case SETUSERPROFILE:
      return { ...state, profile: action.profile };

    case SETPROFILESTATUS:
      return { ...state, ProfileStatus: action.Status };

    case SavePhoto:
      return { ...state, profile: { ...state.profile, photos: action.photo } };

    case ToggleIsLProfile:
      return { ...state, ProfileLoading: action.bool };

    default:
      return state;
  }
};

export const addPostActionCreator = (newMessageBody) => ({ type: ADDPOST, newMessageBody });
export const SetUserProfile = (profile) => ({ type: SETUSERPROFILE, profile });
export const SetProfileStatus = (Status) => ({ type: SETPROFILESTATUS, Status });
const deletePost = (PostId) => ({ type: DELETEDPOST, PostId });
export const SavePhotoSucess = (photo) => ({ type: SavePhoto, photo });
export const ToggleIsLoadingProfile = (bool) => ({ type: ToggleIsLProfile, bool });

export const DeletePost = (ID) => (dispatch) => {
  dispatch(deletePost(ID))
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