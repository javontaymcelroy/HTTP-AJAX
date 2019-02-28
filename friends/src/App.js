import React from 'react';
import axios from 'axios';
import FriendList from './components/FriendsList';
import FriendForm from './components/FriendsForm';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      error: '',
      name: '',
      email: '',
      age: ''
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

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newFriend = {
      name: this.state.name,
      email: this.state.email,
      age: this.state.age,
      id: this.state.friends.length + 1
    };

    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  };

  render() {
    return (
      <div className='App'>
        <h1>Friend List</h1>
        <FriendList {...this.state} />
        <FriendForm
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
