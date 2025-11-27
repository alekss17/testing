import { AuthApi } from '../DAL/api'

const SET_USER_DATA = 'SETUSERDATA'
const IS_AUTH_CHECKING = 'ISAUTHCHECKING'

let initialState = {
    email: null,
    login: null,
    userId: null,
    isAuth: false,
    isAuthChecking: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
                return {
                    ...state,
                    ...action.data,
                    isAuth: true
                }
                case IS_AUTH_CHECKING:
                    return {
                        ...state,
                        isAuthChecking: action.bollean
             }
        default:
            return state
    }
}

export const SetAuthUserData = (email, login, userId) => ({ type: SET_USER_DATA, data: {email, login, userId} });
export const isAuthChecking = (bollean) => ({type: IS_AUTH_CHECKING, bollean })

export const GetMe = () => {
    return (dispatch) => {
        dispatch(isAuthChecking(false))
        AuthApi.GetMe()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(isAuthChecking(true))
              let {email, login, id} = data.data
              dispatch(SetAuthUserData(email, login, id))
            }
          });
    }
}

export default authReducer;