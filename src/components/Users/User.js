import React from 'react';
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
                <p>Username: <small>{props.user.login.username}</small></p>
                <br />
                <p>Email: {props.user.email}</p>
                <br />
                <p>Salary: <small>${props.user.salary}</small></p>
                <p>Phone: <small>{props.user.phone}</small></p>
                <button>Add Me</button>
            </div>
        </div>
    );
};

export default User;