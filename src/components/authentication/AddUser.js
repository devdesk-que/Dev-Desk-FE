// React Components
import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

// Store
import { createUser } from '../../store/actions';

// Components
import Logo from '../../assets/Logo';

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

    this.props
      .createUser(this.state)
      .then(() => {
        this.props.history.push('./');
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    const { username, password, authType } = this.state;
    const { loading, error } = this.props;

    if (this.props.isNew) {
      return <Redirect to='/login' />;
    }

    return (
      <div className='signup-component'>
        <div className='signup-content'>
          <Logo />
          <h3 className='login-banner'>
            Sign Up to Access our Developer Network
          </h3>
          <NavLink exact to='/' className='login-link'>
            <p className='login-text'>Back to Login</p>
            <MdArrowBack className='back-arr' />
          </NavLink>
        </div>

        <form onSubmit={this.handleSubmit} className='signup-form'>
          <h1 className='login-title'>Sign Up for an Account</h1>
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
            <option value=''>Select User Type</option>
            <option value='user'>User</option>
            <option value='admin'>Admin</option>
            <option value='helper'>Helper</option>
          </select>

          {loading ? (
            <p>creating user...</p>
          ) : (
            <button type='submit'>AddUser</button>
          )}
        </form>
      </div>
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
