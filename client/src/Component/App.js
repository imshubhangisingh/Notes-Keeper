import React, { Component } from 'react';
import Header from './Shared/Header.js';
import Login from './Login/Login'


class App extends Component {
  state = {
    LoggedIn: true
  };
  render() {
    return (
      <div className='App'>
        <Header dark={true}>Leadstagram1</Header>
        {this.state.LoggedIn ? <Login /> : <p>Show Notes</p>}
      </div>
    );
  }
}
export default App;