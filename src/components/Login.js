import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../store/actions';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
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
    console.log('IS AUTH:', this.props.isAuth);
    await this.props.login(this.state);
    // Awaits Login, goes through reducer and sets auth
    // if isAuth is true, right hand side of && runs
    // if isAuth is false, right hand will not run
    // this.props.isAuth && this.props.history.push('/dashboard');
    console.log('IS AUTH AFTER AWAIT:', this.props.isAuth);
  };
    // handleSubmit = evt => {
    //     evt.preventDefault()
    //     const { username, password } = this.state
    //     this.props
    //         .login(username, password)
    //         .then(() => {
    //             this.props.history.push('/dashboard')
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }

  render() {
    const { username, password } = this.state;
    const { loading, error } = this.props;

    if (this.props.isAuth) {
      return <Redirect to='/dashboard' />;
    }

    return (
      <div className='login-component'>
        <Logo />
        <h3 className='login-banner'>
          You have problems. <br /> We have solutions. <br /> ...Sometimes
        </h3>

        <form onSubmit={this.handleSubmit} className='login-form'>
          <h1 className='login-title'>Log In to Your Account</h1>
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

          {loading ? (
            <p>Logging in...</p>
          ) : (
            <button type='submit'>Login</button>
          )}
          <p className='signup'>
            Need an Account?
            <NavLink exact to='/adduser' className='signup-link'>
              Sign Up
            </NavLink>
          </p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.devDeskReducer.loading,
  error: state.devDeskReducer.error,
  isAuth: state.devDeskReducer.isAuth
});

const mapDispatchToProps = {
  login
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
