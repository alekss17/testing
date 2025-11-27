import { UsersApi } from "../DAL/api"

const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UNFOLLOW'
const SET_USERS = 'SETUSERS'
const SET_CURRENT_PAGE = 'SETCURRENTPAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOOGLE_IS_FATCHING = 'TOGGLEISFATCHING'
const TOOGLE_IS_FOLLOWING = 'TOGGLEISFOLLOWING'

let initialState = {
    Users: [],
    TotalUserCount: 0,
    PageSize: 5,
    currentPage: 1,
    isFatching: false,
    FollowingInProgress: []
}

const UserPage = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                Users: state.Users.map(u =>
                    u.id === action.id ? { ...u, followed: true } : u
                )
            }

        case UN_FOLLOW:
            return {
                ...state,
                Users: state.Users.map(u =>
                    u.id === action.id ? { ...u, followed: false } : u
                )
            }

        case SET_USERS:
            return { ...state, Users: action.users }

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }

        case SET_TOTAL_COUNT:
            return { ...state, TotalUserCount: action.total }

        case TOOGLE_IS_FATCHING:
                return {
                    ...state,
                    isFatching: action.isFatching
                }
        case TOOGLE_IS_FOLLOWING:
            return {
                ...state,
                FollowingInProgress: action.isFollowing 
                ? [...state.FollowingInProgress, action.UserId]
                : state.FollowingInProgress.filter(id => id !== action.UserId)
            }
        default:
            return state
    }
}

export const AcceptFollow = (id) => ({ type: FOLLOW, id });
export const AcceptUnFollow = (id) => ({ type: UN_FOLLOW, id });
export const SetUsers = (users) => ({ type: SET_USERS, users });
export const SetCurrentPage = (p) => ({ type: SET_CURRENT_PAGE, currentPage: p });
export const SetTotalUserCount = (total) => ({ type: SET_TOTAL_COUNT, total });
export const ToggleIsFatching = (isFatching) => ({ type: TOOGLE_IS_FATCHING,  isFatching});
export const ToggleIsFollowing = (isFollowing, UserId) => ({ type: TOOGLE_IS_FOLLOWING,  isFollowing, UserId});

export const GetUsers = (currentPage, PageSize) => {
        return (dispatch) => {
            
    dispatch(ToggleIsFatching(true))
        
    UsersApi.GetUsers(currentPage, PageSize).then(data => {
        dispatch(SetUsers(data.items))
        dispatch(SetCurrentPage(currentPage))
        dispatch(SetTotalUserCount(100))
        dispatch(ToggleIsFatching(false))
    });
  }
}

export const UnFollow = (UserId) => {
    return (dispatch) => {
        dispatch(ToggleIsFollowing(true, UserId))

        UsersApi.UnFollow(UserId).then(data => {
             if (data.resultCode === 0 ) {
                 dispatch(AcceptUnFollow(UserId))
             }
             dispatch(ToggleIsFollowing(false, UserId))
         })
    }
}

export const Follow = (UserId) => {
    return (dispatch) => {
        dispatch(ToggleIsFollowing(true, UserId))

        UsersApi.Follow(UserId).then(data => {
             if (data.resultCode === 0 ) {
                 dispatch(AcceptFollow(UserId))
             }
             dispatch(ToggleIsFollowing(false, UserId))
         })
    }
}

export default UserPage;