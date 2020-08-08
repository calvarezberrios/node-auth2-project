import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import PrivateRoute from "./components/PrivateRoute";
import UsersPage from './components/UsersPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path = "/signin" component = {Signin} />
        <Route path = "/signup" component = {Signup} />
        <PrivateRoute path = "/users" component = {UsersPage} />
        <Route path = "/" render = {() => <Redirect to = "/signin" />} />
      </Switch>
      
      
    </div>
  );
}

export default App;
