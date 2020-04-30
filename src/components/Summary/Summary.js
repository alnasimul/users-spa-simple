import React from 'react';
import './Summary.css';
const Summary = (props) => {
    let status = props.status;
    console.log(props.status);

    let total = 0;

    for (let i = 0; i < status.length; i++) {
        const friend = status[i];

        total = total + friend.salary;
        
    }
    return (
        <div className="Summary">
            <h3>Status Summary</h3>
            <h5>Friends Added: {status.length}</h5>
            <h5>Yearly Salary: {total}</h5>
        </div>
    );
};

export default Summary;