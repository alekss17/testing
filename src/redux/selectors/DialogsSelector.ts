import { RootState } from "../redux-store"

export const dialogsSelector = (state: RootState) => {
    return (
        state.DialogsReducer.dialogs
    )
}
export const dialogsMessagesSelector = (state: RootState) => {
    return (
        state.DialogsReducer.Messages
    )
}
