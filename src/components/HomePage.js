import React from 'react';
import { Link } from 'react-router-dom';

import './HomePage.css';

export class HomePage extends React.Component {
    render() {
        return (
            <div className="home-page">
                <h1 className="main-heading">Let's Plan Your Events</h1>
                <div className="btn-wrapper">
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
            </div>
        )   
    }
}