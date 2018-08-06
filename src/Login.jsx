import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";
import {Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";

export default class Login extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            userid:"",
            password:""
        };
    }

    validateForm(){
        return this.state.userid.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = event => {

        event.preventDefault();
    };

    render(){
        return(
            <div className="Login">
                <header className= "Login-header">USER LOGIN</header>
                <p className= "Login-intro">
                    Submit your details below to start a new session:
                </p>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="userid" bsSize="large">
                        <ControlLabel>User ID: </ControlLabel>
                        <FormControl
                            autoFocus
                            type="id"
                            value={this.state.userid}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password:</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        LOGIN
                    </Button>
                </form>
                <p className="Login-footer">Magic Coders &copy; | 2018
                </p>
            </div>
        );
    }
}
