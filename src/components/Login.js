import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../store/actions';

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

  handleSubmit = evt => {
    evt.preventDefault();

    const { username, password } = this.state;
    this.props
      .login(username, password)
      .then(() => {
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    const { username, password } = this.state;
    const { loading, error } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        {error && <p className='error'>{error}</p>}
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={username}
          onChange={this.handleChange}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={this.handleChange}
        />
        {loading ? <p>Logging in...</p> : <button type='submit'>Login</button>}
      </form>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  error: state.error
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
