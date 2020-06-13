import React from 'react';

export class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/add">Add Event</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/dashboard">View Events</a>
                    </li>
                </ul>
                <div>
                    Hello, {sessionStorage.getItem('firstName')}
                    <button onClick={this.signOutClick}>Sign Out</button>
                </div>
            </nav>
        )
    }

    signOutClick(e) {
        sessionStorage.clear();

        window.location.href = '/';
    }
}