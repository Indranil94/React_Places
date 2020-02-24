import React from 'react';

import BackDrop from '../../shared/components/UIElements/Backdrop';
import WarningModal from '../../shared/components/UIElements/WarningModal'

const DeletePlace = (props)=>{
    return (
        <React.Fragment>
            <BackDrop onClick={props.close}/>
            <WarningModal 
                message="Are you sure you want to delete this item?"
                okClick={props.delete}
                cancel={props.close}
            />
        </React.Fragment>
    )
}

export default DeletePlace;