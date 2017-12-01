import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: "Harry"
  }
  usernameChangeHandler = (event) => {
    this.setState(
      {
        username: event.target.value
      }
    )
  }
  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <UserInput username={this.state.username} click={this.usernameChangeHandler}/>
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
