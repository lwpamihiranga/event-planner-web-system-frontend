import React from 'react';
import axios from 'axios';
import jwt from 'jsonwebtoken';

import './LoginPage.css';

const url = 'http://localhost:5000/api';

export class LoginPage extends React.Component {
    constructor() {
        super();
        
        this.state = {
            email: '',
            password: ''
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.loginClick = this.loginClick.bind(this);
    }
    render() {
        return (
            <div className="main-div">
                <div style={{paddingTop: 30, paddingBottom: 20}} className="container jumbotron">
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="email" onChange={this.handleEmailChange}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password" onChange={this.handlePasswordChange} />
                    </div>
                    <button className="btn btn-primary" onClick={this.loginClick}>Log In</button>
                    <button className="btn btn-secondary" onClick={this.goToRegisterClick}>Go to Register</button>
                    <button className="btn btn-info" onClick={this.returnClick}>Return Home</button>
                </div>
            </div>
        )
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value })
    }

    loginClick(e) {
        axios.post(url + '/user/login', this.state)
            .then(res => {
                // console.log(res);
                if(res.status === 200) {
                    jwt.verify(res.data.token, 'secret', (err, decode) => {
                        // console.log(decode);
                        sessionStorage.setItem('userId', decode.userId);
                        sessionStorage.setItem('firstName', decode.firstName);
                    });

                    // sessionStorage.setItem('token', res.data.token);

                    window.location.href = '/dashboard';
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    goToRegisterClick(e) {
        window.location.href = '/register';
    }

    returnClick(e) {
        window.location.href = '/';
    }
}