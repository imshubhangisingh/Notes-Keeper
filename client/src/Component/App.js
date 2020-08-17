import React, { Component } from 'react';
import Header from './Shared/Header.js';
import Login from './Login/Login'


class App extends Component {
  state = {
    LoggedIn: false,
    Error: false
  };
  handelAuthentication = (formData) => {
    const { username, password } = formData;
    alert(`Username: ${username} Password ${password}`);
    if (username === password) {
      this.setState({ LoggedIn: formData, Error: false })
    } else {
      this.setState({ LoggedIn: false, Error: true })
    }
  }
  render() {
    return (
      <div className='App'>
        <Header dark={true}>Leadstagram1</Header>
        {this.state.LoggedIn ? <Login handelAuthentication={this.handelAuthentication} Error={this.state.Error} /> : <p>Show Notes</p>}
      </div>
    );
  }
}
export default App;