import React, { Component } from 'react';
import Header from './Shared/Header.js';
import Login from './Login/Login'


class App extends Component {
  state = {
    LoggedIn: true,
    Error: true
  };
  handelAuthentication = (formData) => {
    const { username, password } = formData;
    if (username === password) {
      this.setState({ LoggedIn: formData, Error: false })
      alert(`Username: ${username} Password ${password}`);
    } else {
      this.setState({ LoggedIn: false, Error: true })
      // alert(`Username: ${username} Password ${password}`);
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