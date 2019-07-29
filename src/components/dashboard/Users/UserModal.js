// React Components
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Store
import { getAllUsers } from '../../../store/actions/index';

// Components
import Users from './Users';

class UserModal extends Component {
  componentDidMount() {
    this.props.getAllUsers();
  }
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
            close
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
