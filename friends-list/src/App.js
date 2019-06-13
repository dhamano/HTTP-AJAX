import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import FriendsListing from './components/FriendsListing';
import AddFriendForm from './components/AddFriendForm';

class App extends React.Component {
  state = {
    friendsList: []
  }

  componentDidMount() {
    this.getFriendsListFromServer();
  }

  getFriendsListFromServer = () => {
    axios.get('http://localhost:5000/friends')
      .then(res => { this.updateState(res.data); })
      .catch(err => console.log(err));
  }

  addFriendToServer = (newFriend) => {
    axios.post(`http://localhost:5000/friends`, newFriend)
      .then(res => { this.updateState(res.data); })
      .then( this.props.history.push("/") )
      .catch( err => console.log(err));
  }

  editFriendOnServer = (editedFriend) => {
    axios.put(`http://localhost:5000/friends/${editedFriend.id}`, editedFriend)
      .then(res => { this.updateState(res.data); })
      .catch( err => console.log(err));
  }

  deleteFriendOnServer = (friendToDelete) => {
    axios.delete(`http://localhost:5000/friends/${friendToDelete}`)
      .then(res => { this.updateState(res.data); })
      .catch( err => console.log(err));
  }

  updateState = (data) => {
    this.setState({ friendsList: data });
  }

  render() {
    if(this.state.friendsList === []) {
      return ( <h2>Loading&hellip;</h2> );
    }
    let highestID = Math.max.apply(Math, this.state.friendsList.map(function(friend) { return friend.id; }));
    return (
      <div className="App">
        <Route exact path="/" render={ props => <AddFriendForm {...props} addFriendToServer={this.addFriendToServer} lastID={highestID} /> } />
        <Route path="/:status" render={ props => <AddFriendForm {...props} addFriendToServer={this.addFriendToServer} lastID={highestID} /> } />
        <Route path="/" render={ props => <FriendsListing {...props} friendsList={this.state.friendsList} editFriendOnServer={this.editFriendOnServer} deleteFriendOnServer={this.deleteFriendOnServer} /> } />
      </div>
    );
  }
}

export default App;
