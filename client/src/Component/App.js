import React, { Component } from 'react';
import Header from './Shared/Header.js';
import Login from './Login/Login'
import Notes from "./Notes/Notes"
import { AuthenticateUser, LogoutUser, GetActiveUser } from '../Services/AuthServices.js';
import Loading from './Shared/Loading'


class App extends Component {
  state = {
    LoggedIn: false,
    Error: false,
    Success: false
  };
  handelAuthentication = cred => {
    AuthenticateUser(cred)
      .then(res => {
        this.setState({
          LoggedIn: res.data,
          Error: false,
          Success: false
        });
      }).catch(() => {
        this.setState({
          LoggedIn: false,
          Error: true,
          Success: false
        });
      });
  };

  handelLogout = () => {
    LogoutUser().then((res) => {
      if (res.data === "User successfully logged out.")
        this.setState({
          LoggedIn: false,
          Error: false,
          Success: true
        });
    });
  };
  //avoid users from getting logged out on refresh
  componentDidMount() {
    GetActiveUser().then(res => {
      if (res.status === 200) {
        this.setState({
          LoggedIn: res.data
        });
      }//below function is to avoid the flash of login screen while logging in
    }).catch(() => { }).then(() => {
      this.setState({
        Loaded: true
      })
    });
  }
  render() {
    return (
      <div className='App'>
        <Header dark={true}>Keeper</Header>
        {this.state.Loaded ? (
          <>
            {this.state.LoggedIn ? (
              <Notes LoggedIn={this.state.LoggedIn} Logout={this.handelLogout} />
            ) : (
                <Login
                  handelAuthentication={this.handelAuthentication}
                  Error={this.state.Error}
                  Success={this.state.Success}
                />
              )}
          </>) : <Loading />}
      </div>
    );
  }
}
export default App;