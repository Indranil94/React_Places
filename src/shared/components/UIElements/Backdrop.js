import React from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.css'

const Backdrop = (props)=>{
    const content = <aside onClick={props.click} className="backdrop">{props.children}</aside>;

    return ReactDOM.createPortal(content,document.getElementById('backdrop-hook'))

}

export default Backdrop;