import React from 'react';
import {NavLink} from 'react-router-dom';

import './User.css';
import Avatar from '../../shared/components/UIElements/Avatar'
import Card from '../../shared/components/UIElements/Card';

const User = (props) =>{
    return(
        <li className="user-item">
            <Card className="user-item__content">
                <NavLink to={`/${props.id}/places`}>
                    <div className="user-item__image">
                        <Avatar image={props.image} alt="Profile pic" />
                    </div>
                    <div className="user-item__info">
                        <h2>Name: {props.name}</h2>
                        <h3>{props.placeCount>1?"Places":"Place"}: {props.placeCount}</h3>
                    </div>
                </NavLink>
            </Card>
        </li>
    )
}

export default User;