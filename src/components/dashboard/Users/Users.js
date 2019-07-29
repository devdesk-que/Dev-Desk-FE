// React Components
import React, { Component } from 'react';
// import { Link } from 'react-router-dom'

// Component
import User from './User';

class Users extends Component {
  render() {
    return (
      <div>
        {this.props.users.map(user => {
            // <Link to={`/userinformation/${user.id}`}>
            //   <User key={user.id} user={user} />
            // </Link>
          return <User key={user.id} user={user} />; 
        })}
      </div>
    );
  }
}

export default Users;
