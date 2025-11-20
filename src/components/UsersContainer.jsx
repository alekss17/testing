import React from 'react'
import { connect } from 'react-redux';
import Users from './Users';
import { UnFollow, Follow, SetUsers, SetCurrentPage, SetTotalUserCount, ToggleIsFatching } from '../redux/UsersReducer';
import axios from 'axios';
import Preloader from './common/Preloader/Prelooader'

class UsersApiContainer extends React.Component {
    componentDidMount() {
        this.props.ToggleIsFatching(true)
        axios.get(`http://localhost:3000/Users`)
            .then(response => {
                this.props.ToggleIsFatching(false)
                this.props.SetTotalUserCount(response.data.length);
            });
        
        this.loadPage(this.props.currentPage);
    }

    loadPage = (page) => {
        const start = (page - 1) * this.props.PageSize;
        const end = start + this.props.PageSize;

        this.props.ToggleIsFatching(true)
        axios.get(`http://localhost:3000/Users?_start=${start}&_end=${end}`)
            .then(response => {
                this.props.ToggleIsFatching(false)
                this.props.SetUsers(response.data);
            })
    }

    OnePageChanged = (p) => {
        this.props.SetCurrentPage(p);
        this.loadPage(p);
    }

    render() {        
        return <>
        {this.props.isFatching ? <><Preloader /></> : null}
        <Users 
        TotalUserCount={this.props.TotalUserCount}
        PageSize={this.props.PageSize}
        currentPage={this.props.currentPage}
        OnePageChanged={this.OnePageChanged}
        Users={this.props.Users}
        UnFollow={this.props.UnFollow}
        Follow={this.props.Follow}
    /></>
    }
}

let MapStateToProps = (state) => {
    return {
        Users: state.UserPageReducer.Users,
        TotalUserCount: state.UserPageReducer.TotalUserCount,
        PageSize: state.UserPageReducer.PageSize,
        currentPage: state.UserPageReducer.currentPage,
        isFatching: state.UserPageReducer.isFatching
        }
}

// let MapDispatchToProps = (dispatch) => {
//     return {
//         Follow: (id) => {
//             dispatch(FollowAC(id))
//         },
//         UnFollow: (id) => {
//             dispatch(UnFollOWAC(id))
//         },
//         setUsers: (users) => {
//             dispatch(SetUsersAC(users))
//         },
//         SetCurrentPage: (p) => {
//             dispatch(SetCurrentPageAC(p))
//         },
//         SetTotalUserCount: (total) => {
//             dispatch(SetTotalUserCountAC(total))
//         },
//         ToggleIsFatching: (isFatching) => {
//             dispatch(ToggleIsFatchingAC(isFatching))
//         }
//     }
// }


export default connect(MapStateToProps, {Follow, UnFollow, SetUsers, SetCurrentPage, SetTotalUserCount, ToggleIsFatching})(UsersApiContainer);