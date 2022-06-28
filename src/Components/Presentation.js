import React from "react";

function Presentation(props){
    return(
        <div>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    );
}

export default Presentation;