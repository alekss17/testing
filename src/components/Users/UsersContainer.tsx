import React from 'react'
import { connect } from 'react-redux';
import Users from './Users';
import { AcceptUnFollow, AcceptFollow, GetUsers, ToggleIsFollowing, UnFollow, Follow} from '../../redux/UsersReducer';
import Preloader from '../common/Preloader/Prelooader'
import { FollowingInProgress, GetCurrentPage, GetFatching, GetPageSize, GetTotalUserCount, GetUsersSuper } from '../../redux/selectors/UsersSelector';
import { GetIsAuth, GetisAuthChecking } from '../../redux/selectors/authSelector';
import { compose } from 'redux';
import AuthRedirectComponent from '../../hoc/WithAuthNavigate';
import { RootState } from '../../redux/redux-store';
import { UsersType } from '../../types/Types';

interface UserApiContainerProps {
    currentPage: number;
    PageSize: number;
    Users: UsersType[];
    TotalUserCount: number;
    isFatching: boolean;
    FollowingInProgress: number[];
    isAuth: boolean;
    isAuthChecking: boolean;

    GetUsers: (currentPage: number, PageSize: number) => void;
    AcceptFollow: (id: number) => void;
    AcceptUnFollow: (id: number) => void;
    Follow: (UserId: number) => void;
    UnFollow: (UserId: number) => void;
    ToggleIsFollowing: (isFollowing: boolean, UserId: number) => void
}

class UsersApiContainer extends React.Component<UserApiContainerProps> {

    componentDidMount() {
        const {currentPage, PageSize, GetUsers} = this.props;

        GetUsers(currentPage, PageSize);
    }

    OnePageChanged = (p: number) => {
        const PageSize = this.props.PageSize;

        this.props.GetUsers(p, PageSize);
    }

    render() {
        return <>
            {this.props.isFatching ? <Preloader /> : null}
            <Users
               {...this.props}
                OnePageChanged={this.OnePageChanged}
            />
        </>
    }
}

let MapStateToProps = (state: RootState) => {
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

export default compose<React.ComponentType>(
    connect(MapStateToProps, { AcceptFollow, AcceptUnFollow, Follow, UnFollow, GetUsers, ToggleIsFollowing}),
    AuthRedirectComponent
)(UsersApiContainer);