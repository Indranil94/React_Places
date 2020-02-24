import React, { Component } from 'react';

import PlaceList from '../components/PlaceList'

class UserPlaces extends Component{

    state={
        places: [
            {
                id: 'p3',
                title: 'Empire State Building',
                description: 'One of the most famous sky scrapers in the world!',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
                address: '20 W 34th St, New York, NY 10001',
                location: {
                  lat: 40.7484405,
                  lng: -73.9878584
                },
                creator: 'u1'
              },
              {
                id: 'p1',
                title: 'Empire State Building',
                description: 'One of the most famous sky scrapers in the world!',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
                address: '20 W 34th St, New York, NY 10001',
                location: {
                  lat: 40.7484405,
                  lng: -73.9878584
                },
                creator: 'u1'
              },
              {
                id: 'p2',
                title: 'Victoria Memorial',
                description: 'The Victoria Memorial is a large marble building in Kolkata, West Bengal, India, which was built between 1906 and 1921. It is dedicated to the memory of Queen Victoria (1819–1901) and is now a museum and tourist destination under the auspices of the Ministry of Culture.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Victoria_Memorial_situated_in_Kolkata.jpg',
                address: 'Maidan, Kolkata, West Bengal 700071',
                location: {
                  lat: 22.5447396,
                  lng: 88.3434396
                },
                creator: 'u2'
              }
        ]
    }

    render(){
        let creatorId = this.props.match.params.userId;
        // console.log(creatorId);
        return (
            <PlaceList places={this.state.places.filter((place=>{
                return place.creator===creatorId
            }))} />
        )
    }
}

export default UserPlaces;