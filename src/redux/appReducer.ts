import { GetMe } from './authReducer'
import { AppDispatch } from './redux-store'

const INITIALIZED = 'appReducer/INITIALIZED' as const
const TOOGLEERROR = "appReducer/TOOGLE_ERROR" as const

const initialState = {
    initialized: false,
    globalError: null as string | null
}

type initialStateType = typeof initialState

export const SetInitialized = () => ({
    type: INITIALIZED
})

export const ToogleError = (err: string | null) => ({
    type: TOOGLEERROR, err
})

type ActionType = 
| ReturnType<typeof SetInitialized>
| ReturnType<typeof ToogleError>


const appReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case INITIALIZED:
            return { ...state, initialized: true }

        case TOOGLEERROR:
            return {...state, globalError: action.err}
        default:
            return state
    }
}

export const InitializeApp = () => async (dispatch: AppDispatch) => {
    try {
    const token = localStorage.getItem('token')

    if (token) {
        await dispatch(GetMe())
    }

    dispatch(SetInitialized())
} catch(error: unknown) {
    if (error instanceof Error) {
        alert(error.message);
    } else {
        alert(String(error))
    }
}
}
export const ToogleErrorTH = (err: string | null) => (dispatch: AppDispatch) => {
    try {
    dispatch(ToogleError(err))

    setTimeout(() => {
        dispatch(ToogleError(null))
    }, 10000)
} catch(error: unknown) {
    if (error instanceof Error) {
        alert(error.message);
    } else {
        alert(String(error))
    }
}
}

export default appReducer
