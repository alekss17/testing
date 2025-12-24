import { AuthApi } from '../DAL/api'
import { securityApi } from '../DAL/api'
import { ResultCodeEnum, ResultCodeForCaptcha } from '../types/Types'
import { AppDispatch } from './redux-store'

const SET_USER_DATA = 'authReducer/SET_USER_DATA' as const
const IS_AUTH_CHECKING = 'authReducer/IS_AUTH_CHECKING' as const
const SET_FORM_ERROR = 'authReducer/SET_FORM_ERROR' as const
const SET_CAPTCHA_URL = 'authReducer/SET_CAPTCHA_URL' as const

const initialState = {
    email: null as string | null,
    login: null as string | null,
    userId: null as number | null,
    isAuth: false as boolean,
    isAuthChecking: true as boolean,
    formError: null as string | null,
    captchaUrl: null as string | null, // if null then captcha is not required
}

type initialStateType = typeof initialState


const authReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
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

export const SetAuthUserData = (email: string | null, login: string | null, userId: number | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: { email, login, userId, isAuth }
} as const)

export const isAuthChecking = (value: boolean) => ({
    type: IS_AUTH_CHECKING,
    value
} as const)

export const SetFormError = (error: string | null) => ({
    type: SET_FORM_ERROR,
    error
} as const)
const SetCaptcha = (captchaUrl: string) => ({
    type: SET_CAPTCHA_URL,
    captchaUrl
} as const)

type ActionType = 
| ReturnType<typeof SetAuthUserData>
| ReturnType<typeof isAuthChecking>
| ReturnType<typeof SetFormError>
| ReturnType<typeof SetCaptcha>


export const GetMe = () => async (dispatch: AppDispatch) => {
    dispatch(isAuthChecking(true))

    const data = await AuthApi.GetMe()

    if (data.resultCode === ResultCodeEnum.Succes) {
        dispatch(SetAuthUserData(
            data.data.email,
            data.data.login,
            data.data.id,
            true
        ))
    }

    dispatch(isAuthChecking(false))
}

export const login = (email: string, password: string, rememberMe: boolean = false, captcha: string) => async (dispatch: AppDispatch) => {
    try {
    const data = await AuthApi.Login(email, password, rememberMe, captcha)

    if (data.resultCode === ResultCodeEnum.Succes) {
        localStorage.setItem('token', data.data.token)
        dispatch(GetMe())
        dispatch(SetFormError(null))
    }
    else {
        if (data.resultCode === ResultCodeForCaptcha.Captcha) {
            dispatch(getCaptchaUrl())
        }
        dispatch(SetFormError(data.messages[0] || 'Login error'))
    }
} catch(error: unknown) {
    if (error instanceof Error) {
        alert(error.message);
    } else {
        alert(String(error))
    }
}
}

export const getCaptchaUrl = () => async (dispatch: AppDispatch) => {
    try {
    const data = await securityApi.getCaptcha()
    const captchaUrl = data.url
    dispatch(SetCaptcha(captchaUrl))
} catch(error: unknown) {
    if (error instanceof Error) {
        alert(error.message);
    } else {
        alert(String(error))
    }
}
}

export const logout = () => async (dispatch: AppDispatch) => {
    try {
    dispatch(isAuthChecking(true))

    const data = await AuthApi.Logout()

    if (data.resultCode === ResultCodeEnum.Succes) {
        localStorage.removeItem('token')
        dispatch(SetAuthUserData(null, null, null, false))
        dispatch(SetFormError(null))
    }

    dispatch(isAuthChecking(false))
} catch(error: unknown) {
    if (error instanceof Error) {
        alert(error.message);
    } else {
        alert(String(error))
    }
}
}

export default authReducer
