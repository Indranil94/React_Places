import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Users from './users/pages/Users';
import NewPlaces from './places/pages/NewPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlaces from './places/pages/UpdatePlaces';
import Authenticate from './users/pages/Authenticate';
import {AuthContext} from './shared/util/authContext';

class App extends Component{

  state={
    isLoggedIn: false
  }

  logIn=()=>{
    this.setState({
      isLoggedIn: true
    })
  }

  logOut=()=>{
    this.setState({
      isLoggedIn: false
    })
  }

  render(){

    let routes = null;

    if(this.state.isLoggedIn){
      routes= (
        <Switch>
          <Route path="/" exact>
              <Users />
            </Route>
            <Route path="/:userId/places" component={UserPlaces} />
            <Route path="/places/new" exact>
              <NewPlaces />
            </Route>
            <Route path="/places/:id" component={UpdatePlaces} />
            <Redirect to="/" />
        </Switch>
      )
    }
    else{
      routes=(
        <Switch>
            <Route path="/" exact>
              <Users />
            </Route>
            <Route path="/:userId/places" component={UserPlaces} />
            <Route path="/auth" component={Authenticate} />
            <Redirect to="/auth" />
          </Switch>
      )
    }

    return (
      <AuthContext.Provider value={
        {
          isLoggedIn: this.state.isLoggedIn,
          logIn: this.logIn,
          logOut: this.logOut
        }
      }>
        <BrowserRouter>
          <MainNavigation />
          {routes}
        </BrowserRouter>
      </AuthContext.Provider>

    )
  }

}

export default App;
