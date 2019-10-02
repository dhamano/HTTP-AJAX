import React from 'react';

const DisplayEditFriend = props => {
  return (
    <React.Fragment>
      <div className="edit-item">
        <button onClick={props.changeEditable} className="edit">Edit</button>
      </div>
      <dl>
        <dt>Name:</dt>
        <dd>{props.name}</dd>
        <dt>Age:</dt>
        <dd>{props.age}</dd>
        <dt>Email:</dt>
        <dd><a href={`mailto:${props.email}`} title={props.email}>{props.email}</a></dd>
      </dl>
    </React.Fragment>
  )
}

export default DisplayEditFriend;