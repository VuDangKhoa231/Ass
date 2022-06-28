import React from "react";
import Store from "./Store";
class Stock extends React.Component{
    constructor(){
    super();
        this.state = {
                itemName: 'rose',
                number: 1000
        };
    }
    changeNumber=()=>{
        this.setState({number: this.state.number-1});
    }
    render(){
        return(
           <div>
               <Store ItemName = {this.state.itemName}
                        number = {this.state.number}
                        onChangeNumber={this.changeNumber}
                />
                <Store ItemName = {this.state.itemName}
                        number = {this.state.number}
                        onChangeNumber={this.changeNumber}
                />
           </div>
        );   
    }
}
export default Stock;