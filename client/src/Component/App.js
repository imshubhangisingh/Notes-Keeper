import React, { Component } from 'react';
import Header from './Shared/Header.js';


class App extends Component {
  state = {
    LoggedIn: false
  };
  render() {
    return (
      <div className='App'>
        <Header dark={true}>Leadstagram1</Header>
      </div>
    );
  }
}
export default App;