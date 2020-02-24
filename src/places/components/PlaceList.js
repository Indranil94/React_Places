import React from 'react';

import Card from '../../shared/components/UIElements/Card'
import PlaceItem from './PlaceItem';
import Button from '../../shared/components/FormElements/Button'
import './PlaceList.css'

const PlaceList =(props)=>{
    if(props.places.length===0){
        return (
                <Card style={{margin: "auto", marginTop: "5rem", paddingBottom:"1rem", textAlign: "center", width:"90%", maxWidth: "40rem"}}>
                    <h2>No Places added yet. Maybe add some places?</h2>
                        <Button inverse to="/places/new">Share a Place</Button>
                </Card>
            )
    }
    return (
        <ul className="place-list">
            {
                props.places.map(place=>{
                    return <PlaceItem
                        key={place.id}
                        id={place.id}
                        title={place.title}
                        address={place.address}
                        imageUrl={place.imageUrl}
                        description={place.description}
                        creatorId={place.creator}
                        coordinates={place.location}
                    />
                })
            }
        </ul>

    )
}

export default PlaceList;