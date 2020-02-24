import React, { Component } from 'react';

import {required, maxLength, minLength, email, validate} from '../../shared/util/validators';
import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import './NewPlaces.css'

class newPlaces extends Component{
    
    state= {
        title: {
            value: null,
            isValid: false,
            validators: [required],
            errMsg: null,
            touched: false
        },
        description: {
            value: null,
            isValid: false,
            validators: [required, minLength(5)],
            errMsg: null,
            touched: false
        },
        address: {
            value: null,
            isValid: false,
            validators: [required],
            errMsg: null,
            touched: false
        },
        isValid: false
    }

    // validationHandler=(name, value)=>{
    //     switch(name){
    //         case 'place':
    //             if(!value){
    //                 return false;
    //             }
    //             return true;
    //         default:
    //             return false;
    //     }
    // }

    onChangeHandler=(event, name)=>{
        let newState = {...this.state};
        let newInputState = {...newState[name]};
        newInputState.value=event.target.value;
        let validationResult = validate(event.target.value, newInputState.validators);
        newInputState.isValid = validationResult.isValid;
        newInputState.errMsg = validationResult.errMsg;
        newInputState.touched = true;
        newState[name] = newInputState;

        let formValidity = true;

        Object.keys(newState).forEach(key=>{
            if(key!=="isValid"){
                formValidity= formValidity && newState[key].isValid
            }
        })

        newState.isValid = formValidity
        this.setState({...newState});
    }

    onAddPlaceHandler=(e)=>{
        e.preventDefault();
        let formValues = {};
        Object.keys(this.state).forEach(key=>{
            if(key!=="isValid"){
                formValues[key] = this.state[key].value;
            }
        })
        console.log(formValues)
    }
    
    render(){
        return (
            <form className="place-form">
                <Input 
                    type="input" 
                    placeholder="Enter Place name" 
                    label="Place Name"
                    name="title"
                    errorText={this.state.title.errMsg}
                    isValid={this.state.title.isValid}
                    className={(!this.state.title.isValid && this.state.title.touched)?"form-control--invalid":null}
                    onChange={this.onChangeHandler}
                    touched={this.state.title.touched}
                />
                <Input
                    type="textarea"
                    label="Description"
                    name="description"
                    errorText={this.state.description.errMsg}
                    isValid={this.state.description.isValid}
                    className={(!this.state.description.isValid && this.state.description.touched)?"form-control--invalid":null}
                    touched={this.state.description.touched}
                    onChange={this.onChangeHandler}
                />
                <Input
                    type="input"
                    label="Address"
                    name="address"
                    errorText={this.state.address.errMsg}
                    isValid={this.state.address.isValid}
                    className={(!this.state.address.isValid && this.state.address.touched)?"form-control--invalid":null}
                    touched={this.state.address.touched}
                    onChange={this.onChangeHandler}
                />
                <Button onClick={this.onAddPlaceHandler} disabled={!this.state.isValid} type="Submit" >Add Places</Button>
            </form>
        )
    }
}

export default newPlaces;