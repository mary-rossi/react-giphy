import React from "react";

function Button(props) {
    const handleClick = () => {
        props.handleClickButton();
    };

    return(
        <button 
        className="button" 
        type="button" 
        onClick={handleClick}>New Dog Giphy</button>
    );
}

export default Button;