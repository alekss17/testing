import { RootState } from "../redux-store"

export const AppInitialized = (state: RootState) => {
    return (
    state.app.initialized
    )
}

export const GlobalErr = (state: RootState) => {
    return (
    state.app.globalError
    )
}