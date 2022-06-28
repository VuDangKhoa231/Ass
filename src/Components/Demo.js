
import React from "react";
import DemoComponent from './DemoComponents';
// const comment = {
//     date : new Date(),
//     text : "welcome to react components",
//     author : {
//         name: 'Khoa',
//         avatarURL:'images/img.jsp'
//     }
// };

const name = 'Heloo';

export default function Tester(){
    return(
        <DemoComponent id = "1" name={name}/>
    );
    
}