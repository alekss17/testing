export const GetIsAuth = (state) => {
    return (
        state.auth.isAuth
    )
}

export const GetisAuthChecking = (state) => {
    return (
        state.auth.isAuthChecking
    )
}

export const loginSelector = (state) => {
    return (
        state.auth.login
    )
}

export const formErrorSelector = (state) => {
    return (
        state.auth.formError
    )
}

export const getCaptcha = (state) => {
    return (
        state.auth.captchaUrl
    )
}