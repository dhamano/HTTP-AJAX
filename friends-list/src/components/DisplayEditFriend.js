import React from 'react';

class DisplayFriend extends React.Component {
  state = {
    id    : 0,
    name  : '',
    age   : 0,
    email : ''
  }

  componentDidMount() {
    if(this.state.id !== this.props.id) {
      this.setState({
        id    : this.props.id,
        name  : this.props.name,
        age   : this.props.age,
        email : this.props.email
      })
    }
  }

  onChangeHandler = event => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  onSaveEdited = event => {
    if ( this.state.name !== this.props.name || this.state.age !== this.props.age || this.state.email !== this.props.email ) {
      this.props.editFriendOnServer(this.state);
      this.props.changeEditable();
    } else {
      this.props.changeEditable();
    }
  }

  removeFriend = event => {
      let confirm = window.confirm("are you sure you want to delete this friend");
      (confirm) && this.props.deleteFriendOnServer(this.state.id); this.props.changeEditable();
  }

  render() {
    return (
      <React.Fragment>
        <div className="edit-item">
          <button onClick={this.onSaveEdited} className="save">Save</button>
          <button onClick={this.removeFriend} className="delete">Delete</button>
        </div>
        <dl>
          <dt>Name:</dt>
          <dd><input type="text" onChange={this.onChangeHandler} name="name" value={this.state.name} /></dd>
          <dt>Age:</dt>
          <dd><input type="number" onChange={this.onChangeHandler} name="age" value={this.state.age} /></dd>
          <dt>Email:</dt>
          <dd><input type="email" onChange={this.onChangeHandler} name="email" value={this.state.email} /></dd>
        </dl>
      </React.Fragment>
    )
  }
}

export default DisplayFriend;