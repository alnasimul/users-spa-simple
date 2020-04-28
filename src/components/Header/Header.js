import React from 'react';
import './Header.css';
import users from '../../fakeData';

const Header = () => {
    console.log(users);
    return (
        <div class="header-area">
            <h1>Users List Spa</h1>
        </div>
    );
};

export default Header;