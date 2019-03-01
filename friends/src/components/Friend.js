import React from 'react';
import '../App.css';

const Friend = props => {
  return (
    <>
      <h2>{props.name}</h2>
      <ul>
        <li>Age: {props.age}</li>
        <li>Email: {props.email}</li>
      </ul>
    </>
  );
};

export default Friend;
