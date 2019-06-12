import React from 'react';

class FriendCard extends React.Component {
  state = {
    id    : this.props.id,
    name  : this.props.name,
    age   : this.props.age,
    email : this.props.email
  }

  render() {
    return(
      <div className="friend-card" data-id={this.state.id}>
        <dl>
          <dd>Name:</dd>
          <dt>{this.state.name}</dt>
          <dd>Age:</dd>
          <dt>{this.state.age}</dt>
          <dd>Email:</dd>
          <dt><a href={`mailto:${this.state.email}`} title={this.state.email}>{this.state.email}</a></dt>
        </dl>
      </div>
    )
  }
}

export default FriendCard;