import React, { Component } from 'react';

import '../App.css';

import User from '../components/User';
import Year from '../components/Year';

import { connect } from "react-redux"

class App extends Component {
  render() {
    return (
      <div>
        <User user={this.props.user} />
        <Year />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.userInfo.user
  }
}

export default connect(mapStateToProps)(App);