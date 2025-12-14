import { UsersApi } from "../DAL/api"
import { UpdateObjectInArray } from "../utils/object-helpers"

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
                Users: UpdateObjectInArray(state.Users, action.id, "id", {followed: true})
            }

        case UN_FOLLOW:
            return {
                ...state,
                Users: UpdateObjectInArray(state.Users, action.id, "id", {followed: false})
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
        return async (dispatch) => {
    dispatch(ToggleIsFatching(true))

    let data = await UsersApi.GetUsers(currentPage, PageSize)

        dispatch(SetUsers(data.items))
        dispatch(SetCurrentPage(currentPage))
        dispatch(SetTotalUserCount(data.totalCount))
        dispatch(ToggleIsFatching(false))
  }
}

const FollowUnFollowFlow = async (dispatch, UserId, apiMethod, actionCreator) => {
    dispatch(ToggleIsFollowing(true, UserId))

    let data = await apiMethod(UserId)

         if (data.resultCode === 0 ) {
             dispatch(actionCreator(UserId))
         }
         dispatch(ToggleIsFollowing(false, UserId))
}

export const UnFollow = (UserId) => async (dispatch) => { FollowUnFollowFlow(dispatch, UserId, UsersApi.UnFollow.bind(UsersApi), AcceptUnFollow) }

export const Follow = (UserId) => async (dispatch) => { FollowUnFollowFlow(dispatch, UserId, UsersApi.Follow.bind(UsersApi), AcceptFollow) }

export default UserPage;