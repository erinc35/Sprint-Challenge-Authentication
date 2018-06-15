import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom";
import SignupForm from './components/SignupForm';
import Home from "./components/Home";
import Jokes from "./components/Jokes";
import LoginForm from "./components/LoginForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={SignupForm} />
        <Route path="/jokes" component={Jokes} />  
      </div>
    );
  }
}

export default App;
