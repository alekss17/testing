export const getProfileSelector = (state) => {
    return (
        state.ProfileReducer.profile
    )
}
export const getProfileStatusSelector = (state) => {
    return (
        state.ProfileReducer.ProfileStatus
    )
}
export const isAuthSelector = (state) => {
    return (
        state.auth.isAuth
    )
}
export const isAuthCheckingSelector = (state) => {
    return (
        state.auth.isAuthChecking
    )
}
export const meIdSelector = (state) => {
    return (
        state.auth.userId
    )
}
export const ProfileLoadingSelector = (state) => {
    return (
        state.ProfileReducer.ProfileLoading
    )
}