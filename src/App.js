import React, { Component } from 'react';

import './App.css';
import Register from './components/Register'
import Login from './components/Login';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    // call default function to display redux operation
    
  }
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path="/" component={Login}/>
          <Route path="/signup" component={Register}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
