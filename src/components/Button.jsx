import React from 'react';
import "../assets/css/button.css";


const Button = (props) => {

    const isOperator = (value) => isNaN(value) && (value !== '.') && (value !== '=');
    

    return ( 
        <div className={`container-button ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()} >
            {props.children}
        </div>
    );
}
 
export default Button;