import React from 'react';

class AddFriendForm extends React.Component {
  state = {
    id    : 0,
    name : '',
    age   : 0,
    email : ''
  }

  componentDidUpdate() {
    if(this.state.id !== this.props.lastID+1) {
      this.setState( prevState => ({
        id : this.props.lastID+1,
        name : '',
        age   : 0,
        email : ''
      }))
    }
  }

  onSubmitAddToServer = event => {
    event.preventDefault();
    this.props.addFriendToServer(this.state);
  }

  onChangeHandler = event => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmitAddToServer} className="friend-form">
        <h2>Add a Friend</h2>
        <dl>
          <dt><label htmlFor="name"><span>Name:</span></label></dt>
          <dd><input type="text" onChange={this.onChangeHandler} placeholder="name" id="name" name="name" value={this.state.name} /></dd>
          <dt><label htmlFor="age"><span>Age:</span></label></dt>
          <dd><input type="number" onChange={this.onChangeHandler} name="age" value={this.state.age} /></dd>
          <dt><label htmlFor="email"><span>Email:</span></label></dt>
          <dd><input type="email" onChange={this.onChangeHandler} placeholder="email" name="email" value={this.state.email} /></dd>
        </dl>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default AddFriendForm;