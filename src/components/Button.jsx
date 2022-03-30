import React from 'react';



const Button = (props) => {

    const isOperator = (value) => isNaN(value) && (value !== '.') && (value !== '=');
    
    return ( 
        <button className={`container-button ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()} 
                onClick={() => props.handleInput(props.children)}>

            {props.children}
        </button>
    );
}
 
export default Button;