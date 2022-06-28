import React from "react";
function Car(props){
    return <li>I am a {props.brand}</li>
}

function Garage(){
    const car= [
        {id: 1, brand: 'Ford'},
        {id: 2, brand: 'BMW'},
        {id: 3, brand: 'Audi'}
    ];
    return(
        <h1>Who lives in my Garage?</h1>
        <ul>
            
        </ul>
    )
}