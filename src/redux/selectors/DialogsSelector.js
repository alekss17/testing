export const dialogsSelector = (state) => {
    return (
        state.DialogsReducer.dialogs
    )
}
export const dialogsMessagesSelector = (state) => {
    return (
        state.DialogsReducer.Messages
    )
}
