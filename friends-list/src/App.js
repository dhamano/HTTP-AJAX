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
      .then(res => { this.setState({ friendsList: res.data }); })
      .catch(err => console.log(err));
  }

  addFriendToServer = (newFriend) => {
    axios.post(`http://localhost:5000/friends`, newFriend)
    .then(res => { this.setState({ friendsList: res.data }); })
    .catch( err => console.log(err));
  }

  render() {
    if(this.state.friendsList === []) {
      return ( <h2>Loading&hellip;</h2> );
    }
    return (
      <div className="App">
        <Route path="/" render={ props => <AddFriendForm {...props} addFriendToServer={this.addFriendToServer} listLength={this.state.friendsList.length} /> } />
        <Route exact path="/" render={ props => <FriendsListing {...props} friendsList={this.state.friendsList} /> } />
      </div>
    );
  }
}

export default App;
