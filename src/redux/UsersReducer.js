const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UNFOLLOW'
const SET_USERS = 'SETUSERS'
const SET_CURRENT_PAGE = 'SETCURRENTPAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOOGLE_IS_FATCHING = 'TOGGLEISFATCHING'

let initialState = {
    Users: [],
    TotalUserCount: 0,
    PageSize: 5,
    currentPage: 1,
    isFatching: false
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
        default:
            return state
    }
}

export const Follow = (id) => ({ type: FOLLOW, id });
export const UnFollow = (id) => ({ type: UN_FOLLOW, id });
export const SetUsers = (users) => ({ type: SET_USERS, users });
export const SetCurrentPage = (p) => ({ type: SET_CURRENT_PAGE, currentPage: p });
export const SetTotalUserCount = (total) => ({ type: SET_TOTAL_COUNT, total });
export const ToggleIsFatching = (isFatching) => ({ type: TOOGLE_IS_FATCHING,  isFatching});

export default UserPage;