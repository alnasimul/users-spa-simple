import React, { useState, useEffect } from 'react';
import './Body.css'
import User from '../Users/User';
import newUsersParse from '../../fakeData';



const Body = () => {
 let setUsers =  newUsersParse.slice(0,10);
  let [users, getUsers] = useState(setUsers);
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(res => res.json())
  //     .then(data => getUsers(data))
  // }, [])
  
// function loadData(){
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())
//   .then(data => getData(data))
// }

// loadData()
// let users = []
// function getData(data){
//   for (let i = 0; i < data.length; i++) {
//       let user = data[i];
//       users.push(user);
//   }
// }

  // let userPics = ['https://images.app.goo.gl/3LDU4mWFENbXLfov6',
  //   'https://images.app.goo.gl/g2Qr1XwF2wqS7Fuf6',
  //   'https://images.app.goo.gl/AzATnkeGUPrN9mD67',
  //   'https://images.app.goo.gl/j7UkhNeWFtw1AWgF7',
  //   'https://images.app.goo.gl/dbtwAbjwSPcGPJVs7',
  //   'https://images.app.goo.gl/KS4TmJMZX5FFuUm88',
  //   'https://images.app.goo.gl/3LDU4mWFENbXLfov6',
  //   'https://images.app.goo.gl/g2Qr1XwF2wqS7Fuf6',
  //   'https://images.app.goo.gl/AzATnkeGUPrN9mD67',
  //   'https://images.app.goo.gl/j7UkhNeWFtw1AWgF7',
  // ];

  // users.forEach(user => {
  //   for (let i = 0; i < userPics.length; i++) {
  //     const image = userPics[i];

  //     user.image = image;
      
  //   }
  // })

//  for (let i = 0; i < userPics.length; i++) {
//    const image = userPics[i];

//    users[i].image = image;
// }

  console.log(users);
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