import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import './User.css'

const User = (props) => {
    // console.log(props)
    // users

    props.user.salary = Math.floor((Math.random() * 10000 * 10));
    return (
        <div className="singel-user">
            <div className="profile-pic">
                <img src={props.user.picture.large} alt="" />
            </div>
            <div className="singel-user-info">
                <h3>{props.user.name.first} {props.user.name.last}</h3>
                <p> <strong>Username:</strong> <small>{props.user.login.username}</small></p>
                <br />
                <p><strong>Email:</strong> {props.user.email}</p>
                <br />
                <p><strong>Yearly Salary:</strong> <small>${props.user.salary}</small></p>
                <p><strong>Phone:</strong> <small>{props.user.phone}</small></p>
                <button onClick={() => props.handelAddFriend(props.user)}><FontAwesomeIcon icon={faPlus} /> Add Me</button>
            </div>
        </div>
    );
};

export default User;