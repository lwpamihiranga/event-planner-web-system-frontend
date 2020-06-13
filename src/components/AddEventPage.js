import React from 'react';
import axios from 'axios';

import { NavBar } from './NabBar';

import './AddEventPage.css';

const url = 'http://localhost:5000/api';

export class AddEventPage extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            date: '',
            created_by: sessionStorage.getItem('userId')
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.addEventClick = this.addEventClick.bind(this);
    }
    
    render() {
        return (
            <div>
                <NavBar />
                <div className="container jumbotron add-event-container">
                    <div className="form-group">
                        <label>Event Name</label>
                        <input type="text" className="form-control" placeholder="event name" onChange={this.handleNameChange}/>
                    </div>
                    <div className="form-group">
                        <label>Event Date</label>
                        <input type="text" className="form-control" placeholder="eg: 2020-06-13" onChange={this.handleDateChange} />
                    </div>
                    <button className="btn btn-primary" onClick={this.addEventClick}>Add Event</button>
                </div>
            </div>
        )
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value })
    }

    handleDateChange(e) {
        this.setState({ date: e.target.value })
    }

    addEventClick(e) {
        console.log(this.state)
        axios.post(url + '/event', this.state)
            .then(res => {
                console.log(res);
                if(res.status === 201) {
                    window.location.href = '/dashboard';
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
}