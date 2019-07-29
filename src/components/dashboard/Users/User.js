// React Components
import React from 'react';
import { Link } from 'react-router-dom'

const User = props => {
  const { id, username, authType } = props.user;
  return (
    <div>
      <Link to={`/userinformation/${id}`}>
        <p>{id}</p>
        <p>{username}</p>
        <p>{authType}</p>
      </Link>
    </div>
  );
};

export default User;
