import { GetMe } from './authReducer'

const INITIALIZED = 'appReducer/INITIALIZED'
const TOOGLEERROR = "appReducer/TOOGLE_ERROR"

const initialState = {
    initialized: false,
    globalError: null
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED:
            return { ...state, initialized: true }

        case TOOGLEERROR:
            return {...state, globalError: action.err}
        default:
            return state
    }
}

export const SetInitialized = () => ({
    type: INITIALIZED
})

export const ToogleError = (err) => ({
    type: TOOGLEERROR, err
})

export const InitializeApp = () => async (dispatch) => {
    try {
    const token = localStorage.getItem('token')

    if (token) {
        await dispatch(GetMe())
    }

    dispatch(SetInitialized())
} catch(error) {
    alert(error.message)
  }
}
export const ToogleErrorTH = (err) => (dispatch) => {
    try {
    dispatch(ToogleError(err))

    setTimeout(() => {
        dispatch(ToogleError(null))
    }, 10000)
} catch(error) {
    alert(error.message)
  }
}

export default appReducer
