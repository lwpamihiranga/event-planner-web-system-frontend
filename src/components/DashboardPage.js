import React from 'react';

import { NavBar } from './NabBar';
import { ListEventsPage } from './ListEventsPage';

export class DashboardPage extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <ListEventsPage />
            </div>
        )
    }
}