import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createUser } from '../store/actions';

class AddUser extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      authType: ''
    };
  }
  handleChange = evt => {
    evt.preventDefault();

    this.setState({
      [evt.target.name]: evt.target.value
    });
  };
  handleSubmit = async evt => {
    evt.preventDefault();
    await this.props.createUser(this.state);
  };

  render() {
    const { username, password, authType } = this.state;
    const { loading, error } = this.props;

    if (this.props.isNew) {
      return <Redirect to='/login' />;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        {error && <p className='error'>{error}</p>}
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={username}
          onChange={this.handleChange}
          required
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={this.handleChange}
          required
        />
        <select onChange={this.handleChange} required>
          <option value=''>select user type</option>
          <option value={authType.user}>User</option>
          <option value={authType.admin}>Admin</option>
          <option value={authType.helper}>Helper</option>
        </select>

        {loading ? (
          <p>creating user...</p>
        ) : (
          <button type='submit'>AddUser</button>
        )}
      </form>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  isNew: state.isNew,
  error: state.error
});
const mapDispatchToProps = {
  createUser
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddUser)
);
