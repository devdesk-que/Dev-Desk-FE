import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleUser, editUser, deleteUser } from '../../../store/actions';
import NavBar from '../Navigation/NavBar';

class UserInformation extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getSingleUser(id);
  }

  render() {
    if (this.props.singleUser === null) {
      return (
        <>
          <NavBar />
          <p>No user selected</p>
        </>
      );
    }

    const { id, username } = this.props.singleUser;
    return (
      <>
        <NavBar />
        <div className='su-bg'>
          <div className='su-card'>
            <h1>ID: {id}</h1>
            <h1>Username: {username}</h1>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log('THIS IS THE STATE BEING MAPPED:', state);
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
