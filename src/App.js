import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from "react-redux"

class App extends Component {
  render() {
    return (
      <h2>Welcome to React</h2>
    );
  }
}

export default connect()(App);
