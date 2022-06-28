import React from "react";
import Presentation from "./Presentation.js";
class Container extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title : "My Blog",
            content: "I love orchild"
        }
    }
    render(){
        return(
            <div>
                <Presentation title={this.state.title} content={this.state.content}></Presentation>
            </div>
        );
    }
}

export default Container;