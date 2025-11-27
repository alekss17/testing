import React from 'react'
import { connect } from 'react-redux';
import Users from './Users';
import { AcceptUnFollow, AcceptFollow, GetUsers, ToggleIsFollowing} from '../../redux/UsersReducer';
import {UnFollow, Follow} from '../../redux/UsersReducer'
import Preloader from '../common/Preloader/Prelooader'
import AuthRedirectComponent from '../../hoc/WithAuthNavigate';
import { compose } from 'redux';

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
        Users: state.UserPageReducer.Users,
        TotalUserCount: state.UserPageReducer.TotalUserCount,
        PageSize: state.UserPageReducer.PageSize,
        currentPage: state.UserPageReducer.currentPage,
        isFatching: state.UserPageReducer.isFatching,
        FollowingInProgress: state.UserPageReducer.FollowingInProgress
    }
}

export default compose(
    connect(MapStateToProps, { AcceptFollow, AcceptUnFollow, Follow, UnFollow, GetUsers, ToggleIsFollowing}),
    AuthRedirectComponent
)(UsersApiContainer);