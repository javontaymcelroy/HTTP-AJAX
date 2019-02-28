import React from 'react';
import '../App.css';

const FriendForm = props => {
  return (
    <form action='POST' className='form' onSubmit={props.handleSubmit}>
      <input
        type='text'
        name='name'
        value={props.name}
        onChange={props.handleChange}
        placeholder='name'
      />
      <input
        type='text'
        name='age'
        value={props.age}
        onChange={props.handleChange}
        placeholder='age'
      />
      <input
        type='email'
        name='email'
        value={props.email}
        onChange={props.handleChange}
        placeholder='email'
      />
      <button>Add Friend</button>
    </form>
  );
};

export default FriendForm;
