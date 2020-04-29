import React, { useState ,useEffect} from 'react';
import './Body.css'
import User from '../Users/User';


// function loadData(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => getData(data))
// }

// loadData()
// let users = []
// function getData(data){
//     for (let i = 0; i < data.length; i++) {
//         let user = data[i];
//         users.push(user);
//     }
// }


const Body = () => {
    const [users, getUsers] = useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => getUsers(data) )
    },[])
    
    return (
        <div className="Body">
            <div className="user-info">
              {users.map(user => <User user={user}></User>)}
            </div>
            <div className="side-bar">
                <h1>This is sidebar</h1>
            </div>
        </div>
    );
};

export default Body;