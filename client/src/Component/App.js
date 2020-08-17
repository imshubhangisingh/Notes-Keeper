import React, { Component } from 'react';
import Header from './Shared/Header.js';
import Login from './Login/Login'
import Notes from "./Notes/Notes"
import { AuthenticateUser, LogoutUser } from '../Services/AuthServices.js';


class App extends Component {
  state = {
    LoggedIn: false,
    Error: false
  };
  handelAuthentication = cred => {
    AuthenticateUser(cred)
      .then(res => {
        this.setState({
          LoggedIn: res.data,
          Error: false
        });
      }).catch(() => {
        this.setState({
          LoggedIn: false,
          Error: true
        });
      });
  };

  handelLogout = () => {
    LogoutUser().then(res => {
      if (res.data === "User successfully logged out.")
        this.setState({
          LoggedIn: false,
          Error: false
        });
    })

  }
  render() {
    return (
      <div className='App'>
        <Header dark={true}>Leadstagram1</Header>
        {this.state.LoggedIn ? (
          <Notes LoggedIn={this.state.LoggedIn} Logout={this.handelLogout} />
        ) : (
            <Login handelAuthentication={this.handelAuthentication}
              Error={this.state.Error}
            />
          )}
      </div>
    );
  }
}
export default App;