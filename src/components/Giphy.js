import React from "react";

function Giphy(props) {
    return(
        <div className="giphy">
            <img src={props.giphyImage.message} alt=""/>
        </div>
    )
}

export default Giphy;