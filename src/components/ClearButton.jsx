import React from 'react';

const ClearButton = (props) => {
    return (
        <button className='clear-button' onClick={props.handleClear}>
            {props.children}
        </button> 
    );
}
 
export default ClearButton;