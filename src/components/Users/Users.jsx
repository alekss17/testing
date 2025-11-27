import React from 'react';
import '../../Styles/Users.css';
import userPhoto from '../../assets/images/user.jpg'
import { NavLink } from 'react-router-dom';

const Users = (props) => {
    let pagesCount = Math.ceil(props.TotalUserCount / props.PageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) pages.push(i);

    return (
        <div>
            {pages.map(p => (
                <span
                    key={p}
                    className={props.currentPage === p ? 'ActiveSpanPageUsers' : ''}
                    onClick={() => props.OnePageChanged(p)}
                >{p}</span>
            ))}


            {props.Users.map(u => (
                <div key={u.id}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img className="ManPhoto" src={u.photos.small || userPhoto} />
                        </NavLink>
                        {u.followed
                            ? <button disabled={props.FollowingInProgress.some(id => id === u.id)} onClick={() => {
                              props.UnFollow(u.id)
                            }}>Unfollow</button>
                            : <button disabled={props.FollowingInProgress.some(id => id === u.id)} onClick={() => {
                              props.Follow(u.id)
                            }}>Follow</button>
                        }
                    </div>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Users