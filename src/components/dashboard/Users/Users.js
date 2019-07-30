// React Components
import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

// Component
import User from './User';

class Users extends Component {
  state = {
    // users: this.state.users,
    currentPage: 1,
    usersPerPage: 10,
    
  }

  handleClick = evt => {
    this.setState({
      currentPage: Number(evt.target.id)
    })
  }
  render() {
    const { currentPage, usersPerPage } = this.state
    const users = this.props.users

    // mapping users to the screen
    const indexOfLastUser = currentPage * usersPerPage
    const indexOfFirstUser = indexOfLastUser - usersPerPage
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)
    const showUsers = currentUsers.map(user => {
      return <User key={user.id} user={user} />
    })

    // displaying page numbers for pagination
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(users.length / usersPerPage ); i++ ) {
      pageNumbers.push(i)
    }
    const showPageNumbers = pageNumbers.map(number => {
      return (
        <li key={number} id={number} onClick={this.handleClick}>{number}</li>
      )
    })

    return (
      <div className='users'>
        {showUsers}
        {showPageNumbers}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default connect(
  mapStateToProps)
  (Users);
