import React, { Component } from 'react';

import UserList from '../components/UserList'
class Users extends Component{

    state = {
        users: [
                    {
                        id: "u1",
                        name: "Mani",
                        image: 'https://www.asdl.gatech.edu/Generic_profile_M.jpg',
                        placeCount: 3 
                    },
                    {
                        id: "u2",
                        name: "Tom",
                        image: 'https://sciex.com/community/plugins/img/Generic_Profile_Picture.jpg',
                        placeCount: 1
                    }
                ]
    }

    render(){
       
        return( 
                <div>
                    <h2>Users</h2>
                    <UserList users={this.state.users}/>
                </div>
            )
    }
}


export default Users;