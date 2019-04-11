import React from 'react'

const refreshButton =(props) => {
    return(
        <div>
            <button className = "btn btn-warning btn-sm" onClick = {props.click} disabled = {props.disabled}>
                <i className = "fas fa-sync mr-2"/>
                {props.numberOfRefreshes}
            </button>
        </div>
    );
};

export default refreshButton;