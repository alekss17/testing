import { RootState } from "../redux-store"

export const getPostData = (state: RootState) => {
    return (
        state.ProfileReducer.postData
    )
}