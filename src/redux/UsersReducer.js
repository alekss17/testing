const Follow = 'FOLLOW'
const UnFollow = 'UNFOLLOW'
const SetUsers = 'SETUSERS'


let initialState = {
  Users: [],
}


const UserPage = (state = initialState, action) => {
    switch (action.type) {
      case Follow:
        return {
        ...state,
        Users: state.Users.map(u => {
          if (u.id === action.id) {
            return {
              ...u, followed: true
            }}
          return u
        })
    }
    case UnFollow:
      return {
        ...state,
        Users: state.Users.map((u, id) => {
          if (u.id === action.id) {
            return {
              ...u, followed: false
            }
          }
          return u;
        })
      }
      case SetUsers:
        return {
          ...state, Users: [...state.Users, ...action.users],
        }
        default: return state;
    }
}

export const FollowAC = (id) => {
    return {
       type: Follow,
       id: id
     }}
   export const UnFollOWAC = (id) => {
     return{
     type: UnFollow,
     id: id
   }}
   export const SetUsersAC = (users) => {
    return {
    type: SetUsers,
    users: users
  }}
   

export default UserPage;