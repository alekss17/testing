import { GetMe } from './authReducer'

const INITIALIZED = 'INITIALIZED'

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const SetInitialized = () => ({
    type: INITIALIZED,
})


// Получение данных о текущем пользователе
export const InitializeApp = () => async (dispatch) => {
     let promise = dispatch(GetMe())

     Promise.all([promise]).then(() => {
        dispatch(SetInitialized())
     })
}

export default appReducer;