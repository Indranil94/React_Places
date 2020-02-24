import React, { Component } from 'react';

import Button from '../../shared/components/FormElements/Button'
import Card from '../../shared/components/UIElements/Card';
import Modal from '../../shared/components/UIElements/Modal'
import Map from '../../shared/components/UIElements/Map';
import DeletePlace from '../pages/DeletePlace';
import { AuthContext } from '../../shared/util/authContext';
import './PlaceItem.css'

class PlaceItem extends Component{

    state = {
        mapShow: false,
        deleteModalShow: false
    }

    onShowMap=()=>{
        this.setState({mapShow: true})
    }

    onCloseMap=()=>this.setState({mapShow: false})

    onShowDeleteModal=()=>{
        if(this.context.isLoggedIn){
            this.setState({
                deleteModalShow: true
            })
        }

    }

    onCloseDeleteModal=()=>{
        if(this.context.isLoggedIn){
            this.setState({
                deleteModalShow: false
            })
        }
    }

    onDeletePlace=()=>{
        console.log("deleted place with id "+this.props.id)
    }

    render(){
        return(
            <React.Fragment>
                <Modal 
                    show={this.state.mapShow} 
                    onCancel={this.onCloseMap}
                    header={this.props.address}
                    contentClass="place-item__modal-content"
                    footerClass="place-item__modal-actions"
                    footer={<Button danger onClick={this.onCloseMap}>Close Map</Button>}
                >
                    <Map {...this.props.coordinates}/>
                </Modal>

                {this.state.deleteModalShow?<DeletePlace close={this.onCloseDeleteModal} delete={this.onDeletePlace} />:null}

                <li className="place-item">
                    <Card className="place_item__content">
                        <div className="place-item__image">
                            <img src={this.props.imageUrl} alt={this.props.title} />
                        </div>
                        <div className="place-item__info">
                            <h2>{this.props.title}</h2>
                            <h3>{this.props.address}</h3>
                            <p>{this.props.description}</p>
                        </div>
                        <div className="place_item__actions center">
                            <Button onClick={this.onShowMap} inverse>View On Map</Button>
                            {this.context.isLoggedIn?(
                                <React.Fragment>
                                    <Button to={'/places/'+this.props.id} exact={"exact"} >Edit</Button>
                                    <Button danger onClick={this.onShowDeleteModal}>Delete</Button>
                                </React.Fragment>
                                ): null}
                        </div>
                    </Card>
                    
                </li>
            </React.Fragment>
           
        )
    }
    
}

PlaceItem.contextType = AuthContext;

export default PlaceItem;