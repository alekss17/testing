import { ProfileApi } from '../DAL/api';
import { v4 as uuidv4 } from 'uuid';
import { UserProfile } from '../types/Types';
import { Dispatch } from 'redux';
import { AppDispatch, RootState } from './redux-store';

const ADDPOST = 'ProfilePage/ADD-POST' as const;
const SETUSERPROFILE = 'ProfilePage/SET_USER_PROFILE' as const;
const SETPROFILESTATUS = 'ProfilePage/SET_PROFILE_STATUS' as const;
const DELETEDPOST = 'ProfilePage/DELETE_POST' as const;
const SavePhoto = 'ProfilePage/SAVE_PHOTO' as const;
const ToggleIsLProfile = 'ProfilePage/Toggle' as const;
const ToogleProfileDataFormError = 'ProfilePage/ProfileDataFormError' as const;

let initialState = {
  postData: [
    { id: uuidv4(), message: "Hi, how are you", likescount: 0 },
    { id: uuidv4(), message: "Hi", likescount: 0 },
    { id: uuidv4(), message: "Hohoho", likescount: 0 }
  ],
  profile: null as UserProfile | null,
  ProfileStatus: "",
  ProfileLoading: false,
  ProfileDataFormError: null as string | null
};


type initialStateType = typeof initialState;

export const addPostActionCreator = (newMessageBody: string) => ({ type: ADDPOST, newMessageBody }) as const;
export const SetUserProfile = (profile: UserProfile) => ({ type: SETUSERPROFILE, profile });
export const SetProfileStatus = (Status: string) => ({ type: SETPROFILESTATUS, Status });
const deletePost = (PostId: string) => ({ type: DELETEDPOST, PostId });
export const SavePhotoSucess = (photo: UserProfile['photos']) => ({ type: SavePhoto, photo });
export const ToggleIsLoadingProfile = (bool: boolean) => ({ type: ToggleIsLProfile, bool });
export const ProfileDataFormErrorAC = (err: string) => ({type: ToogleProfileDataFormError, err});

type ActionType =
  | ReturnType<typeof addPostActionCreator>
  | ReturnType<typeof SetUserProfile>
  | ReturnType<typeof SetProfileStatus>
  | ReturnType<typeof deletePost>
  | ReturnType<typeof SavePhotoSucess>
  | ReturnType<typeof ToggleIsLoadingProfile>
  | ReturnType<typeof ProfileDataFormErrorAC>;


const ProfilePage = (state: initialStateType = initialState, action: ActionType): initialStateType => {
  switch (action.type) {

    case ADDPOST: {
      const newPost = {
        id: uuidv4(),
        message: action.newMessageBody,
        likescount: 0
      };
      const updatedPosts = [...state.postData, newPost];
      
      return { ...state, postData: updatedPosts };
    }

    case DELETEDPOST: {
      const updatedPosts = state.postData.filter(p => p.id !== action.PostId);
      return { ...state, postData: updatedPosts };
    }

    case SETUSERPROFILE:
     return { ...state, profile: action.profile };

    case SETPROFILESTATUS:
      return { ...state, ProfileStatus: action.Status };

    case SavePhoto:
      return {
        ...state,
        profile: state.profile
          ? { ...state.profile, photos: action.photo }
          : state.profile
      };
    

    case ToggleIsLProfile:
      return { ...state, ProfileLoading: action.bool };
      
    case ToogleProfileDataFormError:
      return {
        ...state, ProfileDataFormError: action.err
      };
      
    default:
      return state;
  }
};

export const DeletePost = (ID: string) => (dispatch: Dispatch) => {
  dispatch(deletePost(ID));
}

export const GetProfile = (userId: number | null) => async (dispatch: Dispatch) => {
  try {
    dispatch(ToggleIsLoadingProfile(false));

    let data = await ProfileApi.GetProfile(userId);

    const userProfile = data;
    dispatch(SetUserProfile(userProfile));

    dispatch(ToggleIsLoadingProfile(true));
  } catch(error: unknown) {
    if (error instanceof Error) {
    alert(error.message);
    } else {
      alert(String(error))
    }
  }
}

export const GetProfilStatus = (userId: number) => async (dispatch: Dispatch) => {
  try {
    let data = await ProfileApi.GetProfileStatus(userId);

    const Status = data;
    dispatch(SetProfileStatus(Status));
  } catch(error: unknown) {
    if (error instanceof Error) {
    alert(error.message);
    } else {
      alert(String(error))
    }
  }
}

export const UpdateProfileStats = (status: string) => async (dispatch: Dispatch) => {
  try {
    let data = await ProfileApi.UpdateProfileStatus(status);
    if (data.resultCode === 0) {
      dispatch(SetProfileStatus(status));
    }
  } catch(error: unknown) {
    if (error instanceof Error) {
    alert(error.message);
    } else {
      alert(String(error))
    }
  }
}

export const savePhoto = (file: File) => async (dispatch: Dispatch) => {
  try {
    let data = await ProfileApi.savePhoto(file);

    if (data.resultCode === 0) {
      dispatch(SavePhotoSucess(data.data.photos));
    }
  } catch(error: unknown) {
    if (error instanceof Error) {
    alert(error.message);
    } else {
      alert(String(error))
    }
  }
}

export const saveProfile = (profile: UserProfile) => async (dispatch: AppDispatch, getState: () => RootState) => {
  try {
    const userId: number | null =  await getState().auth.userId;
    const data = await ProfileApi.saveProfile(profile);

    if (data.resultCode === 0) {

      dispatch(GetProfile(userId));
      return null;
    }

    const errors: {
      contacts: Record<string, string>
    } = {
      contacts: {}
    };
    
    data.messages.forEach((msg: string) => {
      if (msg.includes("Contacts->")) {
        const key = msg.split("Contacts->")[1].replace(")", "").toLowerCase();
        errors.contacts[key] = msg;
      }
    });

    return errors;
  } catch(error: unknown) {
    if (error instanceof Error) {
    alert(error.message);
    } else {
      alert(String(error))
    }
  }
}

export default ProfilePage;