import React from 'react'

const numberButton = (props) => {
    return(
    <button key = {props.key} className = {props.css} onClick = {props.click}>
     {props.number} 
     </button>
    );
};

export default numberButton;