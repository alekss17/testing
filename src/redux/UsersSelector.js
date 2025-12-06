import { createSelector } from "reselect"

export const getUsers = (state) => {
    return (
         state.UserPageReducer.Users
    )
}
export const GetUsersSuper = createSelector(getUsers, (Users) => {
    return Users.filter(() => true)
})


export const GetTotalUserCount = (state) => {
    return (
         state.UserPageReducer.TotalUserCount
    )
}


export const GetPageSize = (state) => {
    return (
         state.UserPageReducer.PageSize
    )
}


export const GetCurrentPage = (state) => {
    return (
         state.UserPageReducer.currentPage
    )
}


export const GetFatching = (state) => {
    return (
         state.UserPageReducer.isFatching
    )
}


export const FollowingInProgress = (state) => {
    return (
         state.UserPageReducer.FollowingInProgress
    )
}