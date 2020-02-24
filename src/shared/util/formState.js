import {validate } from './validators'

const formState = (state, formElementName, value)=>{
    let changedState = {...state[formElementName]}

    changedState.value = value;
    changedState.touched =true;
    let validityState = validate(changedState.value, changedState.validators);
    changedState.isValid = validityState.isValid;
    changedState.errMsg = validityState.errMsg;

    state[formElementName] = changedState;

    let formValidity = true;
    
    Object.keys(state).forEach(key=>{
        if(state[key] && state[key].isValid!== undefined){
            formValidity= formValidity && state[key].isValid
        }
    })

    state.isValid = formValidity;
    return state
}

export default formState;