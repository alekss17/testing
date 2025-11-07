import React from 'react'
import '../Styles/Users.css'
import * as axios from 'axios'

const Users = (props) => {
    if (props.users.length === 0) {
        axios.get('http://localhost:3001/usersResponse').then(response => {
            props.SetUsers ([
                {id: 1, photo: 'https://img.freepik.com/free-vector/young-man-black-shirt_1308-173618.jpg?semt=ais_hybrid&w=740&q=80', folowed: false, name: 'Alekss', status: 'I\'m a programmist', location: {country: 'Latvia', city: 'Jelgava/Barta'}},
                {id: 2, photo:'https://img.freepik.com/free-vector/young-man-black-shirt_1308-173618.jpg?semt=ais_hybrid&w=740&q=80', folowed: true, name: 'Dimich', status: 'I\'m a boss', location: {country: 'Belarus', city: 'Minsk'}},
                {id: 3, photo: 'https://img.freepik.com/free-vector/young-man-black-shirt_1308-173618.jpg?semt=ais_hybrid&w=740&q=80', folowed: true, name: 'Samuraj', status: 'I\'m a goodest', location: {country: 'USA', city: 'Toledo'}}
              ])
        })
    }

    return (
        <div>
        {props.users.map(u => <div key={u.id}>
            <div>
                <img className="ManPhoto" src={u.photo}></img>
                {u.folowed
              ? <button onClick={() => props.UnFollow(u.id)}>Unfollow</button>
              : <button onClick={() => props.Follow(u.id)}>Follow</button>}</div>
            <div>
                <div>{u.name}</div>
                <div>{u.status}</div>
                <div>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </div>
            </div>
        </div>
        )}
        </div>
    )
}

export default Users;