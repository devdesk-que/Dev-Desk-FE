// React Components
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Store
import { getAllUsers } from '../../../store/actions/index';

// Components
import Users from './Users';

class UserModal extends Component {

  // Calls getAllUsers from redux
  componentDidMount() {
    this.props.getAllUsers();
  }
  
  // Method, allows close button to close modal
  onClose = evt => {
    this.props.onClose && this.props.onClose(evt);
  };

  render() {
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
            Close
          </button>
        </div>
      </div>
    );
  }
}

// Pulling loading, error, and users states from Redux
const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error,
    users: state.users
  };
};

// Pulling getAllUsers frunction from Redux
const mapDispatchToProps = {
  getAllUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserModal);
