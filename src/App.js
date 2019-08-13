import React from 'react';
import './App.css';

import UserForm from './UserForm';
import FriendForm from './FriendForm';
import Data from './Data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      friend: '',
      friends: []
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  nextForm(e) {
    e.preventDefault();
    document.getElementById('user-form').classList.add('hidden');
    document.getElementById('friend-form').classList.remove('hidden');
  }

  displayData() {
    document.getElementById('friend-form').classList.add('hidden');
    document.getElementById('data').classList.remove('hidden');
  }

  addFriend(e) {
    e.preventDefault();
    const newFriend = this.state.friend;
    this.setState({
      friend: '',
      friends: [...this.state.friends, newFriend]
    });
  }

  deleteFriend = i => e => {
    e.preventDefault();
    let friendsArr = this.state.friends;
    friendsArr.splice(i, 1);
    this.setState({
      friends: friendsArr
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.displayData();
  }

  startOver(e) {
    e.preventDefault();
    
  }

  render() {
      return (
      <div className="App">
          <UserForm
            nextForm={ e => this.nextForm(e) }
            handleChange={ e => this.handleChange(e) } />
          <FriendForm
            friend= { this.state.friend }
            friends={ this.state.friends }
            handleChange={ e => this.handleChange(e) }
            addFriend={ e => this.addFriend(e) }
            deleteFriend={ e => this.deleteFriend(e) }
            handleSubmit={ e => this.handleSubmit(e) }/>
          <Data
            name={ this.state.name }
            age={ this.state.age }
            friends={ this.state.friends }
            startOver={ e => this.startOver(e) }
          />
      </div>
    );
  }
}

export default App;
