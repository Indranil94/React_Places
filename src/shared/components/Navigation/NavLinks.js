import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import {AuthContext} from '../../util/authContext';


import './NavLinks.css';

const NavLinks = ()=>{

    const auth = useContext(AuthContext);
    return(
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>All Users</NavLink>
            </li>
            {auth.isLoggedIn && <li>
                <NavLink to="/uid/places" exact>My Places</NavLink>
            </li>}
            {auth.isLoggedIn && <li>
                <NavLink to="/places/new" exact>Add Place</NavLink>
            </li>}
            {!auth.isLoggedIn && <li>
                <NavLink to="/auth" exact>Authenticate</NavLink>
            </li>}
            {auth.isLoggedIn && <li>
                <button onClick={auth.logOut}>Log Out</button>
            </li>}
        </ul>
    )

}

export default NavLinks;