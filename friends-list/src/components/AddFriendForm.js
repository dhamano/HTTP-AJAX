import React from 'react';

class AddFriendForm extends React.Component {
  state = {
    id    : 0,
    name : '',
    age   : 0,
    email : ''
  }

  componentDidUpdate() {
    if(this.state.id !== this.props.listLength+1) {
      this.setState( prevState => ({
        id : this.props.listLength+1
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
        
        <label htmlFor="name"><input type="text" onChange={this.onChangeHandler} placeholder="name" id="name" name="name" value={this.state.name} /></label>
        <label htmlFor="age"><input type="number" onChange={this.onChangeHandler} name="age" value={this.state.age} /></label>
        <label htmlFor="email"><input type="email" onChange={this.onChangeHandler} placeholder="email" name="email" value={this.state.email} /></label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default AddFriendForm;