import { RootState } from "../redux-store"

export const getProfileSelector = (state: RootState) => {
    return (
        state.ProfileReducer.profile
    )
}
export const getProfileStatusSelector = (state: RootState) => {
    return (
        state.ProfileReducer.ProfileStatus
    )
}
export const isAuthSelector = (state: RootState) => {
    return (
        state.auth.isAuth
    )
}
export const isAuthCheckingSelector = (state: RootState) => {
    return (
        state.auth.isAuthChecking
    )
}
export const meIdSelector = (state: RootState) => {
    return (
        state.auth.userId
    )
}
export const ProfileLoadingSelector = (state: RootState) => {
    return (
        state.ProfileReducer.ProfileLoading
    )
}