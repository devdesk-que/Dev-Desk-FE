import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleUser, editUser, deleteUser } from '../../../store/actions';
import NavBar from '../Navigation/NavBar';
import { MdDeleteForever } from 'react-icons/md';

class UserInformation extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getSingleUser(id);
  }

  deleteUser = async evt => {
    const id = this.props.match.params.id;
    console.log('ID', id);
    evt.preventDefault();
    this.props.deleteUser(id).then(() => {
      this.props.history.push('/dashboard');
    });
  };

  render() {
    if (this.props.singleUser === null) {
      return (
        <>
          <NavBar />
          <p>No user selected</p>
        </>
      );
    }

    const { id, username, authType } = this.props.singleUser;
    return (
      <>
        <NavBar />
        <div className='su-bg'>
          <div className='su-card'>
            <h1>ID: {id}</h1>
            <h1>Username: {username}</h1>
            <select value={authType} onChange={this.selectChange} required>
              <option value=''>Select User Type</option>
              <option value='user'>User</option>
              <option value='admin'>Admin</option>
              <option value='helper'>Helper</option>
            </select>
            <button type='submit'>Edit</button>
            <MdDeleteForever className='delete' onClick={this.deleteUser} />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error,
    singleUser: state.id
  };
};

const mapDispatchToProps = {
  getSingleUser,
  editUser,
  deleteUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInformation);
