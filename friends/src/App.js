import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import FriendsForm from './components/FriendsForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      error: ''
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  }

  render() {
    return (
      <div>
        <FriendsList friends={this.state.friends} />
        <FriendsForm />
      </div>
    );
  }
}

export default App;
