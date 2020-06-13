import React from 'react';
import axios from 'axios';

import './ListEventsPage.css';

const url = 'http://localhost:5000/api';

export class ListEventsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            events: [],
            delete: function(e) {
                console.log('clicked');
            }
        }

        axios.get(url + '/event/created/' + sessionStorage.getItem('userId'))
            .then(res => {
                console.log(res);
                this.setState({ events:  res.data });
            })        
    }
    render() {
        return (
            <div className="container"> 
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.events.map(function(event, i) {
                            return (
                                <tr key={i}>
                                    <th style={{ paddingTop: 30}} scope="row">{i + 1}</th>
                                    <td style={{ paddingTop: 30}}>{event.name}</td>
                                    <td style={{ paddingTop: 30}}>{event.date}</td>
                                    <td><button className="btn btn-danger">Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }

  
}