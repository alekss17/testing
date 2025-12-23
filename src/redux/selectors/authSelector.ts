import { RootState } from "../redux-store"

export const GetIsAuth = (state: RootState) => {
    return (
        state.auth.isAuth
    )
}

export const GetisAuthChecking = (state: RootState) => {
    return (
        state.auth.isAuthChecking
    )
}

export const loginSelector = (state: RootState) => {
    return (
        state.auth.login
    )
}

export const formErrorSelector = (state: RootState) => {
    return (
        state.auth.formError
    )
}

export const getCaptcha = (state: RootState) => {
    return (
        state.auth.captchaUrl
    )
}