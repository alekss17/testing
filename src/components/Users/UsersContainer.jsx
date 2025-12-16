import React from 'react'
import { connect } from 'react-redux';
import Users from './Users';
import { AcceptUnFollow, AcceptFollow, GetUsers, ToggleIsFollowing, UnFollow, Follow} from '../../redux/UsersReducer';
import Preloader from '../common/Preloader/Prelooader'
import { FollowingInProgress, GetCurrentPage, GetFatching, GetPageSize, GetTotalUserCount, GetUsersSuper } from '../../redux/selectors/UsersSelector';
import { GetIsAuth, GetisAuthChecking } from '../../redux/selectors/authSelector';
import { compose } from 'redux';
import AuthRedirectComponent from '../../hoc/WithAuthNavigate';

class UsersApiContainer extends React.Component {

    componentDidMount() {
        const {currentPage, PageSize, GetUsers} = this.props;

        GetUsers(currentPage, PageSize);
    }

    OnePageChanged = (p) => {
        const {PageSize} = this.props;

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