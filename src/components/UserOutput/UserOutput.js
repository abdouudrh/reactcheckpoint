import React from 'react';
import './UserOutput.css';

const UserOutput = (props)=>{
    return (
        <div>
            <h1>Hello I am {props.name}</h1>
            <p>This is Paragaraph</p>
        </div>
    )
    
}
export default UserOutput