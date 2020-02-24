import React from 'react';
import ReactDOM from 'react-dom';

import Card from '../UIElements/Card'
import Button from '../FormElements/Button'
import './WarningModal.css'

const WarningModal = (props)=>{
    let content = (
        <Card className="warning-modal">
            <p>{props.message}</p>
            <Button onClick={props.okClick} >Yes</Button>
            <Button danger onClick={props.cancel}>Cancel</Button>
        </Card>)

        return ReactDOM.createPortal(content,document.getElementById('modal-hook'))

}

export default WarningModal;