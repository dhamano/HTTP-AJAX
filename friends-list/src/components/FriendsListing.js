import React from 'react';
import FriendCard from './FriendCard';


const FriendsListing = props => {
  if(props.friendsList.length === 0) {
    return <h2>Loading&hellip;</h2>
  }
  return (
    <div className="friends-list">
      {
        props.friendsList.map( (friend, i) => {
          return <FriendCard key={i} {...friend}  editFriendOnServer={props.editFriendOnServer} deleteFriendOnServer={props.deleteFriendOnServer} />
        })
      }
    </div>
  );
}

export default FriendsListing;