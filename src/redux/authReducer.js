const SET_USER_DATA = 'SETUSERDATA'

let initialState = {
    userId: null,
    login: null,
    email: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
                return {
                    ...state,
                    ...action.data
                }
        default:
            return state
    }
}

export const SetUserData = (userId, login, email) => ({ type: SET_USER_DATA, data: {userId, login, email} });

export default authReducer;