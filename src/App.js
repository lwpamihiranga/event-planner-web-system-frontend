import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import { HomePage } from './components/HomePage';
import { LoginPage } from './components/LoginPage';
import { DashboardPage } from './components/DashboardPage';
import { AddEventPage } from './components/AddEventPage';
import { RegisterPage } from './components/RegisterPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route exact path="/dashboard">
          <DashboardPage />
        </Route>
        <Route exact path="/add">
            <AddEventPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
