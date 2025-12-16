import { GetMe } from './authReducer'

const INITIALIZED = 'appReducer/INITIALIZED'

const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED:
            return { ...state, initialized: true }
        default:
            return state
    }
}

export const SetInitialized = () => ({
    type: INITIALIZED
})

export const InitializeApp = () => async (dispatch) => {
    const token = localStorage.getItem('token')

    if (token) {
        await dispatch(GetMe())
    }

    dispatch(SetInitialized())
}

export default appReducer
