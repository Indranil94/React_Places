import React from 'react';

import User from './User';    
import './UserList.css';

const UserList = (props)=>{
    let list =props.users.map((person,i)=>{
                return <User key={person.id} {...person} />
            })
    return(
        <ul className="users-list">
            {list}
        </ul>
    )
}

export default UserList;