import React from 'react';
import '../../Styles/Users.css';
import userPhoto from '../../assets/images/user.jpg'
import { NavLink } from 'react-router-dom';

const User = React.memo(({User, FollowingInProgress, Follow, UnFollow}) => {
    return (
    <div>
                    <div>
                        <NavLink to={'/profile/' + User.id}>
                            <img className="ManPhoto" src={User.photos.small || userPhoto} />
                        </NavLink>
                        {User.followed
                            ? <button disabled={FollowingInProgress.some(id => id === User.id)} onClick={() => {
                              UnFollow(User.id)
                            }}>Unfollow</button>
                            : <button disabled={FollowingInProgress.some(id => id === User.id)} onClick={() => {
                              Follow(User.id)
                            }}>Follow</button>
                        }
                    </div>
                    <div>
                        <div>{User.name}</div>
                        <div>{User.status}</div>
                    </div>
        </div>
    );
})

export default User