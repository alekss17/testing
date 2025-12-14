import React from 'react';
import '../../Styles/Users.css';
import Paginator from '../common/Paginator/Pagination';
import User from './User';

const Users = React.memo(({currentPage, TotalUserCount, PageSize, Users, OnePageChanged, ...props}) => {
    return (
        <div>
            <Paginator currentPage={currentPage} TotalItemsCount={TotalUserCount} PageSize={PageSize} OnePageChanged={OnePageChanged} />
            {Users.map(u => <User User={u} FollowingInProgress={props.FollowingInProgress} Follow={props.Follow} UnFollow={props.UnFollow} key={u.id}/> )}
        </div>
    );
})

export default Users