import React from 'react';

import './Input.css'

const Input = (props)=>{
    let content = null;
    if(props.type==="textarea"){
        content = <textarea id={props.name} rows="3" value={props.value} onChange={(event)=>props.onChange(event, props.name)} />
    }
    else if(props.type==="input"){
        content = <input id={props.name} value={props.value} placeholder={props.placeholder} onChange={(event)=>props.onChange(event, props.name)} />
    }
    else{
        return null;
    }

    return(
        <div className={`form-control ${props.className}`}>
            <label htmlFor={props.name}>
                {props.label}
            </label>
            {content}
            {(!props.isValid && props.touched)?<p>{props.errorText}</p>:null}
        </div>
    )

}

export default Input;