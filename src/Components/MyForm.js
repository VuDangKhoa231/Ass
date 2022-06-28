import React from "react";
import { render } from "react-dom";
import { Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';
class MyForm extends React.Component {
    constructor() {
        super();
        this.state = {
            fullName: '',
            age: 0,
            email: '',
            error: {
                fullName: '',
                age: '',
                email: ''
            }
        }

        this.hanldeSubmit=this.hanldeSubmit.bind(this);
        this.hanldeInputChange=this.hanldeInputChange.bind(this);
        this.hanldeInputBlur=this.hanldeInputBlur.bind(this);
    }
    // hanldeOnChange = (e) => {
    //     this.setState({ text: e.target.value })
    // }
    // hanldeOnSubmit = (e) => {
    //     e.preventDefault()
    //     alert('Text was just submitte: ' + this.state.text)
    //     this.setState(
    //         { text: '' }
    //     )
    // }

    // render() {
    //     return (
    //         <div>
    //             <form onSubmit={this.hanldeOnSubmit}>
    //                 <input type="text" value={this.state.text} onChange={this.hanldeOnChange} />
    //                 <input type="submit" />
    //             </form>
    //         </div>
    //     )
    // }
    hanldeInputChange(event){
        const nameControl = event.target.name;
        const value= event.target.value;
        this.setState({[nameControl]: value})
    }
    hanldeInputBlur(event){
        
    }
    render(){
        return(
            <div className="container">
                <div className="row row-content">
                    <FormGroup>
                        <Label for="fullName">Fullname:</Label>
                        <Input type="text" id="fullName" name="fullnName" placeholder="fullName" value={this.state.fullName}
                        valid={this.state.error.fullName==''} invalid={this.state.error.fullName!==''}
                        onChange={this.hanldeInputChange}
                        onBlur={this.hanldeInputBlur}/>
                        <FormFeedback> {this.state.error.fullName}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="age">Age:</Label>
                        <Input type="text" id="fullname" name="age" placeholder="age" value={this.state.age}
                        valid={this.state.error.age==''} invalid={this.state.error.age!==''}
                        onChange={this.hanldeInputChange}
                        onBlur={this.hanldeInputBlur}/>
                        <FormFeedback> {this.state.error.age}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email:</Label>
                        <Input type="text" id="email" name="email" placeholder="email" value={this.state.email}
                        valid={this.state.error.email==''} invalid={this.state.error.email!==''}
                        onChange={this.hanldeInputChange}
                        onBlur={this.hanldeInputBlur}/>
                        <FormFeedback> {this.state.error.email}</FormFeedback>
                    </FormGroup>
                </div>
            </div>
        )
    }
}

export default MyForm;