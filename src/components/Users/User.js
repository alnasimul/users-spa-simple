import React from 'react';


const User = (props) => {
  // console.log(props)
   // users
    return (
        <div className="singel-user">
           <div className="profile-pic"></div>
           <div className="singel-user-info">
                <h3>{props.user.name}</h3>
    <p><small>{props.user.username}</small></p>
                <br/>
    <p>{props.user.email}</p>
    <br/>
    <p><small>{props.user.phone}</small></p>
           </div>
        </div>
    );
};

export default User;