import React from 'react'
import { connect } from 'react-redux';
import Users from './Users';
import { UnFollOWAC, FollowAC, SetUsersAC } from '../redux/UsersReducer';

let MapStateToProps = (state) => {
    return {
        users: state.UserPageReducer.Users
        }
}

let MapDispatchToProps = (dispatch) => {
    return {
        Follow: (id) => {
            dispatch(FollowAC(id))
        },
        UnFollow: (id) => {
            dispatch(UnFollOWAC(id))
        },
        SetUsers: (users) => {
            dispatch(SetUsersAC(users))
        }
        }
}


export default connect(MapStateToProps, MapDispatchToProps)(Users);