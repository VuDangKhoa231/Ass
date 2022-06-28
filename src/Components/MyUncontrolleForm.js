import React from "react";
import {Form,Input} from 'reactstrap';
class MyUncontrolledForm extends React.Component{
    constructor(props){
        super(props);
            this.state= {
                isCase: false
            }
        this.changIsCase = this.changIsCase.bind(this);
    }
    changIsCase(){
        const value=this.inputText.value;
        this.setState({isCase:!this.state.isCase});
        if(this.state.isCase) this.inputText.value = value.toUpperCase();
        else this.inputText.value = value.toLowerCase();
    }
    render(){
        return(
            <div className="container">
                <div className="row m-5">
                    <div className="col-2 c0l-sm-2">
                        <Form>
                            <p><Input type="text" innerRef={inputControl => this.inputText=inputControl} placeholder="input a text"/></p>
                            <p><Input type="button" onClick={this.changIsCase} value="toggle case" className="btn-class"/></p>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyUncontrolledForm;