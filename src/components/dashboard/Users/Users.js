// React Components
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom'

// Component
import User from './User';

class Users extends Component {
  state = {
    currentPage: 1,
    usersPerPage: 10
  };

  // Handles switch to different pages on click
  handleClick = evt => {
    this.setState({
      currentPage: Number(evt.target.id)
    });
  };
  render() {
    const { currentPage, usersPerPage } = this.state;
    const users = this.props.users;

    // mapping users to the screen
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
    const showUsers = currentUsers.map(user => {
      return <User key={user.id} user={user} />;
    });

    // displaying page numbers for pagination
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
      pageNumbers.push(i);
    }
    const showPageNumbers = pageNumbers.map(number => {
      return (
        <div className='user-pagi-container' key={number}>
          <ol id={number} onClick={this.handleClick} className='page-link'>
            {number}
          </ol>
        </div>
      );
    });

    return (
      <div className='users'>
        {/* Calls showUsers to display current users to the screen inside modal */}
        {showUsers}

        {/* Displays page numbers, for pagination, at bottom of the modal */}
        {showPageNumbers}
      </div>
    );
  }
}

// Pulling users states from Redux
const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(Users);
