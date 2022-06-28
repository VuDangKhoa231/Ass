import React from "react";

class Account extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            name: 'khoa',
            balance: 1000,
        };
        this.withdraw = this.withdraw.bind(this);
    }
    // withdraw(){
    //     this.setState({balance:900});
    // }
    withdraw(){
        this.setState((state,props) => ({
            balance:state.balance + props.increase
        }) );
    } 

    componentDidMount(){
        console.log("testing");
    }

    render(){
        return(
            <div>
                <h2>name: {this.state.name}</h2>
                <h2>balance: {this.state.balance}</h2>
                <button onClick={this.withdraw}> Click me</button>
            </div>
        )
    }
}
export default Account;