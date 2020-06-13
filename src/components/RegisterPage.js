import React from 'react';

import axios from 'axios';

const url = 'http://localhost:5000/api';

export class RegisterPage extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }

        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.registerClick = this.registerClick.bind(this);
    }
    render() {
        return (
            <div className="main-div">
                <div style={{paddingTop: 30, paddingBottom: 20, marginTop: -100}} className="container jumbotron">
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" className="form-control" placeholder="first name" onChange={this.handleFirstNameChange}/>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" className="form-control" placeholder="last name" onChange={this.handleLastNameChange} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="email" onChange={this.handleEmailChange}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password" onChange={this.handlePasswordChange} />
                    </div>
                    <button className="btn btn-primary" onClick={this.registerClick}>Register</button>
                    <button className="btn btn-secondary" onClick={this.goToLoginClick}>Go to Login</button>
                    <button className="btn btn-info" onClick={this.returnClick}>Return Home</button>
                </div>
            </div>
        )
    }

    handleFirstNameChange(e) {
        this.setState({ firstName: e.target.value });
    }

    handleLastNameChange(e) {
        this.setState({ lastName: e.target.value });
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    registerClick(e) {
        axios.post(url + '/user/register', this.state)
            .then(res => {
                console.log(res);
                if(res.status === 201) {
                    sessionStorage.setItem('userId', res.data._id);
                    sessionStorage.setItem('firstName', res.data.firstName);
                }

                window.location.href = '/dashboard';
            })
    }

    goToLoginClick(e) {
        window.location.href = '/login';
    }

    returnClick(e) {
        window.location.href = '/';
    }
}