import React from 'react';

import DisplayFriend from './DisplayFriend';
import DisplayEditFriend from './DisplayEditFriend';

class FriendCard extends React.Component {
  state = {
    isEditable: false
  }

  changeEditable = () => {
    this.setState({
      isEditable: !this.state.isEditable
    })
  }

  render() {
    return(
      <div className="friend-card" data-id={this.state.id}>
        {
          (this.state.isEditable) ?
            <DisplayEditFriend {...this.props} changeEditable={this.changeEditable} editFriendOnServer={this.props.editFriendOnServer} deleteFriendOnServer={this.props.deleteFriendOnServer} />
          :
            <DisplayFriend {...this.props} changeEditable={this.changeEditable}  />
        }
      </div>
    )
  }
}

export default FriendCard;