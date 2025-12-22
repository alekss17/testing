import React from 'react';
import '../../Styles/Users.css';
import Paginator from '../common/Paginator/Pagination';
import User from './User';
import { UsersType } from '../../types/Types';

interface UserTypeProps {
    currentPage: number;
    TotalUserCount: number;
    PageSize: number;
    Users: UsersType[];
    OnePageChanged: (p: number) => void;
    FollowingInProgress: number[];
    Follow: (UserId: number) => void;
    UnFollow: (UserId: number) => void;
}

const Users = React.memo(({currentPage, TotalUserCount, PageSize, Users, OnePageChanged, FollowingInProgress, Follow, UnFollow}: UserTypeProps) => {
    return (
        <div>
            <Paginator currentPage={currentPage} TotalItemsCount={TotalUserCount} PageSize={PageSize} OnePageChanged={OnePageChanged} />
            <p>(Click on user and select it)</p>
            {Users.map((u: UsersType) => <User User={u} FollowingInProgress={FollowingInProgress} Follow={Follow} UnFollow={UnFollow} key={u.id}/> )}
        </div>
    );
})

export default Users