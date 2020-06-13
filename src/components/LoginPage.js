import React from 'react';
import './LoginPage.css';

class LoginPage extends React.Component {
    alert() {
        console.log('test')
    }
    render() {
        return (
            <div className="container jumbotron">
                <form>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.alert}>Log In</button>
                </form>
            </div>
        )
    }
}

export default LoginPage;