import React from 'react';

class AddFriendForm extends React.Component {
  state = {
    name : '',
    age   : 0,
    email : ''
  }

  onSubmitAddToServer = event => {
    event.preventDefault();
    if(this.state.name === '' || this.state.age === 0 || this.state.email === '') {
      alert('please fill in form');
      return
    }
    this.props.addFriendToServer(this.state);
  }

  onChangeHandler = event => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  openModalFriend = event => {
    this.props.history.push("/edit-friend")
  }

  closeModalFriend = event => {
    this.props.history.push("/");
  }

  render() {
    console.log('editfriendform',this.props);
    return (
      <React.Fragment>
        <div className={`form-container${(this.props.match.params.status) ? ' show' : ' hide'}`}>
          <form onSubmit={this.onSubmitAddToServer} className="friend-form">
            <span className="close" onClick={this.closeModalFriend}>X close</span>
            <h2>Add a Friend</h2>
            <dl>
              <dt><label htmlFor="name"><span>Name:</span></label></dt>
              <dd><input type="text" onChange={this.onChangeHandler} placeholder="name" id="name" name="name" value={this.state.name} /></dd>
              <dt className="half"><label htmlFor="age"><span>Age:</span></label></dt>
              <dd className="half"><input type="number" onChange={this.onChangeHandler} name="age" value={this.state.age} /></dd>
              <dt><label htmlFor="email"><span>Email:</span></label></dt>
              <dd><input type="email" onChange={this.onChangeHandler} placeholder="email" name="email" value={this.state.email} /></dd>
            </dl>
            <button type="submit">Submit</button>
          </form>
        </div>
        <button className="add-friend-btn" onClick={this.openModalFriend}><span>+</span> Friend</button>
      </React.Fragment>
    );
  }
}

export default AddFriendForm;