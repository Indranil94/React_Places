import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NavLinks from './NavLinks';
import MainHeader from './MainHeader';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop'
import './MainNavigation.css'

class MainNavigation extends Component{

    state = {
        drawerIsOpen: false,
    }

    openDrawer=()=>{
        this.setState({
            drawerIsOpen: true
        })
    }

    closeDrawer=()=>{
        this.setState({
            drawerIsOpen: false
        })
    }

    render(){
        return (
            <React.Fragment>
                {this.state.drawerIsOpen?<Backdrop click={this.closeDrawer}/>: null}
                <SideDrawer show={this.state.drawerIsOpen} click={this.closeDrawer}>
                    <nav className="main-navigation__drawer-nav">
                        <NavLinks />
                    </nav>
                </SideDrawer>
                
                <MainHeader>
                    <button className="main-navigation__menu-btn" onClick={this.openDrawer}>
                        <span />
                        <span />
                        <span />
                    </button>
                        <h1 className="main-navigation__title">
                            <Link to="/">Your Places</Link>
                        </h1>
                    <nav className="main-navigation__header-nav">
                        <NavLinks />
                    </nav>
                </MainHeader>
            </React.Fragment>
        )
    }
}

export default MainNavigation;