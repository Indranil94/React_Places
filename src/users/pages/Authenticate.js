import React, { Component } from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button'
import formState from '../../shared/util/formState';
import {email,required, minLength} from '../../shared/util/validators';
import { AuthContext } from '../../shared/util/authContext';
import './Authenticate.css'

class Authenticate extends Component{

    state={
        email:{
            value: null,
            validators: [required,email],
            isValid: false,
            errMsg: null,
            touched: false
        },
        password:{
            value: null,
            validators: [required, minLength(6)],
            isValid: false,
            errMsg: null,
            touched: false

        },
        name: null,
        isValid: false,
        loginMode: true
    }

    onChangeHandler=(e, name)=>{
        let newState = {...this.state};
        newState = formState(newState,name,e.target.value);
        this.setState(newState);
    }

    loginHandler=(e)=>{
        e.preventDefault();
        console.log(this.state);
        this.props.history.push('/')
        this.context.logIn();
    }

    switchLoginMode=()=>{
        this.setState((prevState,props)=>({
                loginMode: !prevState.loginMode,
                name: !prevState.loginMode?null:{
                    value: null,
                    validators: [required],
                    isValid: false,
                    errMsg: null,
                    touched: false
                }
            })
        )
        console.log(this.state)
    }

    render(){
        return (
            <div className="login-form">
                <h2 style={{textAlign: "center"}} >{this.state.loginMode?"Login":"Register here"}</h2>
                <hr />
                <form>
                    {!this.state.loginMode?
                        <Input
                            type="input" 
                            name="name" 
                            label="Name" 
                            errorText={this.state.name.errMsg}
                            placeholder="Enter your full name here"  
                            className={!this.state.name.isValid && this.state.name.touched ?"form-control--invalid":null}
                            touched={this.state.name.touched}
                            onChange={this.onChangeHandler}
                        />
                    :null}
                    
                    <Input 
                        type="input" 
                        name="email" 
                        label="Email" 
                        errorText={this.state.email.errMsg}
                        placeholder="Enter your email Id here" 
                        onChange={this.onChangeHandler}
                        className={!this.state.email.isValid && this.state.email.touched ?"form-control--invalid":null}
                        touched={this.state.email.touched}
                    />
                    <Input
                        type="input" 
                        name="password" 
                        label="Password" 
                        errorText={this.state.password.errMsg}
                        placeholder="Enter your password here"  
                        className={!this.state.password.isValid && this.state.password.touched ?"form-control--invalid":null}
                        touched={this.state.password.touched}
                        onChange={this.onChangeHandler}
                    />
                    <div className="btn-group">
                        <Button type="submit" onClick={this.loginHandler} disabled={!this.state.isValid} >
                            {this.state.loginMode?"Login":"Sign Up"}
                        </Button>
                        <Button type="button" inverse onClick={this.switchLoginMode} >
                            Switch to {!this.state.loginMode?"Login":"Sign Up"} mode
                        </Button>
                    </div>

                </form>
            </div>
        )
    }

}

Authenticate.contextType= AuthContext;

export default Authenticate;