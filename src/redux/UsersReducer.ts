import { UsersApi } from "../DAL/api"
import { UpdateObjectInArray } from "../utils/object-helpers"
import { AppDispatch } from "./redux-store"

const FOLLOW = 'UsersReducer/FOLLOW' as const
const UN_FOLLOW = 'UsersReducer/UNFOLLOW' as const
const SET_USERS = 'UsersReducer/SETUSERS' as const
const SET_CURRENT_PAGE = 'UsersReducer/SETCURRENTPAGE' as const
const SET_TOTAL_COUNT = 'UsersReducer/SET_TOTAL_COUNT' as const
const TOOGLE_IS_FATCHING = 'UsersReducer/TOGGLEISFATCHING' as const
const TOOGLE_IS_FOLLOWING = 'UsersReducer/TOGGLEISFOLLOWING' as const

type UsersType = {
    name: string,
    id: number,
    uniqueUrlName: null | string,
    photos: {
      small: null | string, 
      large: null | string  
    },
    status: null | string,
    followed: boolean
}

let initialState = {
    Users: [] as UsersType[], 
    TotalUserCount: 0,
    PageSize: 5,
    currentPage: 1,
    isFatching: false,
    FollowingInProgress: [] as number[] 
}

type initialStateType = typeof initialState

export const AcceptFollow = (id: number) => ({ type: FOLLOW, id } as const);
export const AcceptUnFollow = (id: number) => ({ type: UN_FOLLOW, id } as const);
export const SetUsers = (users: UsersType[]) => ({ type: SET_USERS, users } as const);
export const SetCurrentPage = (p: number) => ({ type: SET_CURRENT_PAGE, currentPage: p } as const);
export const SetTotalUserCount = (total: number) => ({ type: SET_TOTAL_COUNT, total } as const);
export const ToggleIsFatching = (isFatching: boolean) => ({ type: TOOGLE_IS_FATCHING, isFatching } as const);
export const ToggleIsFollowing = (isFollowing: boolean, UserId: number) => ({ type: TOOGLE_IS_FOLLOWING, isFollowing, UserId } as const);

type ActionType = 
| ReturnType<typeof AcceptFollow>
| ReturnType<typeof AcceptUnFollow>
| ReturnType<typeof SetUsers>
| ReturnType<typeof SetCurrentPage>
| ReturnType<typeof SetTotalUserCount>
| ReturnType<typeof ToggleIsFatching>
| ReturnType<typeof ToggleIsFollowing>


const UserPage = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                Users: UpdateObjectInArray(state.Users, action.id, "id", { followed: true })
            }

        case UN_FOLLOW:
            return {
                ...state,
                Users: UpdateObjectInArray(state.Users, action.id, "id", { followed: false })
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

type ApiResponseType = {
    resultCode: number
}

type ApiMethodType = (userId: number) => Promise<ApiResponseType>

export const GetUsers = (currentPage: number, PageSize: number) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(ToggleIsFatching(true))

            let data = await UsersApi.GetUsers(currentPage, PageSize)

            dispatch(SetUsers(data.items))
            dispatch(SetCurrentPage(currentPage))
            dispatch(SetTotalUserCount(data.totalCount))
            dispatch(ToggleIsFatching(false))
        } catch(error: unknown) {
            dispatch(ToggleIsFatching(false))
            if (error instanceof Error) {
                alert(error.message);
            } else {
                alert(String(error))
            }
        }
    }
}

const FollowUnFollowFlow = async (
    dispatch: AppDispatch, 
    UserId: number, 
    apiMethod: ApiMethodType, 
    actionCreator: (id: number) => ReturnType<typeof AcceptFollow> | ReturnType<typeof AcceptUnFollow>
) => {
    try {
        dispatch(ToggleIsFollowing(true, UserId))

        let data = await apiMethod(UserId)

        if (data.resultCode === 0) {
            dispatch(actionCreator(UserId))
        }
        dispatch(ToggleIsFollowing(false, UserId))
    } catch(error: unknown) {
        dispatch(ToggleIsFollowing(false, UserId))
        if (error instanceof Error) {
            alert(error.message);
        } else {
            alert(String(error))
        }
    }
}

export const UnFollow = (UserId: number) => async (dispatch: AppDispatch) => {
    await FollowUnFollowFlow(dispatch, UserId, UsersApi.UnFollow.bind(UsersApi), AcceptUnFollow)
}

export const Follow = (UserId: number) => async (dispatch: AppDispatch) => {
    await FollowUnFollowFlow(dispatch, UserId, UsersApi.Follow.bind(UsersApi), AcceptFollow)
}

export default UserPage;