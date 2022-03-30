import React from 'react';
import '../assets/css/clear.css';

const ClearButton = (props) => {
    return (
        <div className='clear-button'>
            {props.children}
        </div> 
    );
}
 
export default ClearButton;