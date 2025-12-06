import { AuthApi } from '../DAL/api'

const SET_USER_DATA = 'SETUSERDATA'
const IS_AUTH_CHECKING = 'ISAUTHCHECKING'
const SETFORMERROR = 'SET_FORM_ERROR'

let initialState = {
    email: null,
    login: null,
    userId: null,
    isAuth: false,
    isAuthChecking: true,
    formError: []
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }

        case IS_AUTH_CHECKING:
            return {
                ...state,
                isAuthChecking: action.boolean
            }
            case SETFORMERROR:
                return {
                    ...state,
                    formError: action.err
                }
        default:
            return state
    }
}

export const SetAuthUserData = (email, login, userId, isAuth) => ({
    type: SET_USER_DATA,
    payload: { email, login, userId, isAuth }
})

export const isAuthChecking = (boolean) => ({
    type: IS_AUTH_CHECKING,
    boolean
})

export const SetFormError = (err) => ({
    type: SETFORMERROR,
    err
})

// Получение данных о текущем пользователе
export const GetMe = () => (dispatch) => {
    dispatch(isAuthChecking(true))

   return AuthApi.GetMe()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(SetAuthUserData(
                    data.data.email,
                    data.data.login,
                    data.data.id,
                    true
                ))
            }
        })
        .finally(() => {
            dispatch(isAuthChecking(false))
        })
}

// Логин
export const login = (email, password, rememberMe = false) => (dispatch) => {
    dispatch(isAuthChecking(true))

    AuthApi.Login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(GetMe()) // после успешного логина обновляем состояние пользователя
            } else {
                let messages = data.messages.length > 0 ? data.messages[0] : "some error"
                dispatch(SetFormError(messages))
            }
        })
        .finally(() => {
            dispatch(isAuthChecking(false))
        })
}

// Логаут
export const logout = () => (dispatch) => {
    dispatch(isAuthChecking(true))

    AuthApi.Logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(SetAuthUserData(null, null, null, false))
            }
        })
        .finally(() => {
            dispatch(isAuthChecking(false))
        })
}

export default authReducer
