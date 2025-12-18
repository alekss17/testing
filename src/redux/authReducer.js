import { AuthApi } from '../DAL/api'
import { securityApi } from '../DAL/api'

const SET_USER_DATA = 'authReducer/SET_USER_DATA'
const IS_AUTH_CHECKING = 'authReducer/IS_AUTH_CHECKING'
const SET_FORM_ERROR = 'authReducer/SET_FORM_ERROR'
const SET_CAPTCHA_URL = 'authReducer/SET_CAPTCHA_URL'

const initialState = {
    email: null,
    login: null,
    userId: null,
    isAuth: false,
    isAuthChecking: true,
    formError: null,
    captchaUrl: null, // if null then captcha is not required
    dataResultCode: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.payload }

        case IS_AUTH_CHECKING:
            return { ...state, isAuthChecking: action.value }

        case SET_FORM_ERROR:
            return { ...state, formError: action.error }

        case SET_CAPTCHA_URL:
            return { ...state, captchaUrl: action.captchaUrl }
        default:
            return state
    }
}


export const SetAuthUserData = (email, login, userId, isAuth) => ({
    type: SET_USER_DATA,
    payload: { email, login, userId, isAuth }
})

export const isAuthChecking = (value) => ({
    type: IS_AUTH_CHECKING,
    value
})

export const SetFormError = (error) => ({
    type: SET_FORM_ERROR,
    error
})
const SetCaptcha = (captchaUrl) => ({
    type: SET_CAPTCHA_URL,
    captchaUrl
})

export const GetMe = () => async (dispatch) => {
    dispatch(isAuthChecking(true))

    const data = await AuthApi.GetMe()

    if (data.resultCode === 0) {
        dispatch(SetAuthUserData(
            data.data.email,
            data.data.login,
            data.data.id,
            true
        ))
    }

    dispatch(isAuthChecking(false))
}

export const login = (email, password, rememberMe = false, captcha) => async (dispatch) => {
    dispatch(isAuthChecking(true))

    const data = await AuthApi.Login(email, password, rememberMe, captcha)

    if (data.resultCode === 0) {
        localStorage.setItem('token', data.data.token)
        dispatch(GetMe())
        dispatch(SetFormError(null))
    }
    else {
        if (data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        dispatch(SetFormError(data.messages[0] || 'Login error'))
        dispatch(isAuthChecking(false))
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const data = await securityApi.getCaptcha()
    const captchaUrl = data.url
    dispatch(SetCaptcha(captchaUrl))
}

export const logout = () => async (dispatch) => {
    dispatch(isAuthChecking(true))

    const data = await AuthApi.Logout()

    if (data.resultCode === 0) {
        localStorage.removeItem('token')
        dispatch(SetAuthUserData(null, null, null, false))
        dispatch(SetFormError(null))
    }

    dispatch(isAuthChecking(false))
}

export default authReducer
