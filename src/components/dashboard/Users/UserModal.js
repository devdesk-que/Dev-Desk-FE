// React Components
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Store
import { getAllUsers } from '../../../store/actions/index';

// Components
import Users from './Users';

class UserModal extends Component {
  // state = {
  //   currentPage: 1,
  //   usersPerPage: 10,
  //   // users: this.state.users
  //   // users: this.props.users
  // }
  componentDidMount() {
    this.props.getAllUsers();
  }
  onClose = evt => {
    this.props.onClose && this.props.onClose(evt);
  };
  nextPage = evt => {
    evt.preventDefault()

    this.setState({
      currentPage: this.state.currentPage+1
    })
    console.log('prev page: i am working')
  }
  prevPage = evt => {
    evt.preventDefault()

    this.setState({
      currentPage: this.state.currentPage-1
    })
    console.log('next page: i am working')
  }
  render() {
    // destructure state elements
    // const { currentPage, usersPerPage } = this.state
    // const users = this.props.users
    // console.log('00Users: ', users)
    
    // display current users on screen
    // const indexOfLastUser = currentPage * usersPerPage
    // const indexOfFirstUser = indexOfLastUser - usersPerPage
    // const currentUsers = this.props.users.slice(indexOfFirstUser, indexOfLastUser)

    if (!this.props.show) {
      return null;
    }
    return (
      <div className='users-list'>
        <h2 className='users-title'>User List!</h2>

        <div>{this.props.children}</div>
        <Users users={this.props.users} />
        <div>
          <button onClick={this.onClose} className='close-btn'>
            close
          </button>
          <button onClick={this.prevPage}>
            Prev. Page
          </button>
          <button onClick={this.nextPage}>
            Next Page
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error,
    users: state.users
  };
};
const mapDispatchToProps = {
  getAllUsers
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserModal);
