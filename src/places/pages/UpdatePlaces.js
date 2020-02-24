import React, { Component } from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { required, minLength } from '../../shared/util/validators';
import formState from '../../shared/util/formState';
import './UpdatePlaces.css'


let places = [
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
];

class UpdatePlaces extends Component{

    state={
        title: {
            value: null,
            isValid: false,
            validators: [required],
            touched: false,
            errMsg: null
        },
        description: {
            value: null,
            isValid: false,
            validators: [required, minLength(5)],
            touched: false,
            errMsg: null
        },
        isValid: false,
        loaded: false
    }

    componentDidMount(){
        let id = this.props.match.params.id;
        let place = null;

        for(let i=0; i<places.length;i++){
            if(id===places[i].id){
                place = places[i];
                break;
            }
        }

        if(place){
            // let newState = {...this.state};
            let titleState = {
                value: place.title,
                isValid: true,
                validators: [required],
                touched: true,
                errMsg: null
            }
            let descriptionState = {
                value: place.description,
                isValid: true,
                validators: [required, minLength(5)],
                touched: false,
                errMsg: null
            };
            this.setState({
                title: titleState,
                description: descriptionState,
                isValid: false,
                loaded: true
            })
        }
    }

    onChangeHandler=(e, name)=>{
        let newState = {...this.state};
        // let changedState = {...newState[name]}

        // changedState.value = e.target.value;

        // let validityState = validate(changedState.value, changedState.validators);
        // changedState.isValid = validityState.isValid;
        // changedState.errMsg = validityState.errMsg;

        // newState[name] = changedState;
        
        // let formValidity = newState.title.isValid && newState.description.isValid

        // newState.isValid = formValidity;
        newState = formState(newState, name, e.target.value);
        this.setState(newState)
    }

    onSaveHandler=(e)=>{
        e.preventDefault();
        console.log(this.state);
    }

    render(){
        let content = null;
        if(this.state.loaded){
            content = (
                <form className="place-form">
                    <Input
                        type="input" 
                        placeholder="Enter Place name" 
                        label="Place Name"
                        name="title"
                        value={this.state.title.value}
                        errorText={this.state.title.errMsg}
                        isValid={this.state.title.isValid}
                        className={(!this.state.title.isValid && this.state.title.touched)?"form-control--invalid":null}
                        onChange={this.onChangeHandler}
                        touched={this.state.title.touched}
                    />
                    <Input
                        type="textarea"
                        label="Description"
                        value={this.state.description.value}
                        name="description"
                        errorText={this.state.description.errMsg}
                        isValid={this.state.description.isValid}
                        className={(!this.state.description.isValid && this.state.description.touched)?"form-control--invalid":null}
                        touched={this.state.description.touched}
                        onChange={this.onChangeHandler}
                    />
                    <Button onClick={this.onSaveHandler} disabled={!this.state.isValid} >Save</Button>
                </form>
            )
        }
        console.log(content)
        return (
            content?content:(<h2 style={{marginTop: "5rem", color: "white", textAlign: "center"}}>No such place found!</h2>)
        )
    }

}

export default UpdatePlaces;