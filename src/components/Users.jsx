import React from 'react';
import axios from 'axios';
import '../Styles/Users.css';
import userPhoto from '../assets/images/user.jpg'

const Users = (props) => {
    const GetUsers = () => {
            axios.get('http://localhost:3001/Users')
            .then(response => {
                props.setUsers(response.data);
            }
        );
    }
    return (
        <div>
        <button onClick={GetUsers}>GetUsers</button>
            {props.users.map(u => (
                <div key={u.id}>
                    <div>
                        <img className="ManPhoto" src={u.photos.small || userPhoto}/>
                        {u.followed
                            ? <button onClick={() => props.UnFollow(u.id)}>Unfollow</button>
                            : <button onClick={() => props.Follow(u.id)}>Follow</button>}
                    </div>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                            <div>
                                {/* <div>{u.location.country}</div>
                                <div>{u.location.city}</div> */}
                            </div>
                    </div>
                </div>
            ))}
        </div>
    );
    }

export default Users;
