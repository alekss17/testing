import React from 'react'
import { connect } from 'react-redux';
import Users from './Users';
import { AcceptUnFollow, AcceptFollow, GetUsers, ToggleIsFollowing} from '../../redux/UsersReducer';
import {UnFollow, Follow} from '../../redux/UsersReducer'
import Preloader from '../common/Preloader/Prelooader'
import { Navigate } from 'react-router-dom';
import { FollowingInProgress, GetCurrentPage, GetFatching, GetPageSize, GetTotalUserCount, GetUsersSuper } from '../../redux/UsersSelector';
import { GetIsAuth, GetisAuthChecking } from '../../redux/authSelector';
import { compose } from 'redux';
import AuthRedirectComponent from '../../hoc/WithAuthNavigate';

class UsersApiContainer extends React.Component {

    componentDidMount() {
        this.props.GetUsers(this.props.currentPage, this.props.PageSize);
    }

    OnePageChanged = (p) => {
        this.props.GetUsers(p, this.props.PageSize);
    }

    render() {
        return <>
            {this.props.isFatching ? <Preloader /> : null}
            <Users
                TotalUserCount={this.props.TotalUserCount}
                PageSize={this.props.PageSize}
                currentPage={this.props.currentPage}
                OnePageChanged={this.OnePageChanged}
                Users={this.props.Users}
                AcceptUnFollow={this.props.AcceptUnFollow}
                AcceptFollow={this.props.AcceptFollow}
                FollowingInProgress={this.props.FollowingInProgress}
                Follow={this.props.Follow}
                UnFollow={this.props.UnFollow}
            />
        </>
    }
}

let MapStateToProps = (state) => {
    return {
        Users: GetUsersSuper(state),
        TotalUserCount: GetTotalUserCount(state),
        PageSize: GetPageSize(state),
        currentPage: GetCurrentPage(state),
        isFatching: GetFatching(state),
        FollowingInProgress: FollowingInProgress(state),
        isAuth: GetIsAuth(state),
        isAuthChecking: GetisAuthChecking(state)
    }
}

export default compose(
    connect(MapStateToProps, { AcceptFollow, AcceptUnFollow, Follow, UnFollow, GetUsers, ToggleIsFollowing}),
    AuthRedirectComponent
)(UsersApiContainer);