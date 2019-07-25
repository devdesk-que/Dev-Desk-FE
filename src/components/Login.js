import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }
    handleChange = evt => {
        evt.preventDefault()

        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleSubmit = evt => {
        evt.preventDefault()

        const { username, password } = this.state;
        this.props
            .login(username, password)
            .then(() => {

            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        const { username, password } = this.state;
        
        return (
            <form onSubmit={this.handleSubmit}>
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
                <button type='submit'>Login</button>
            </form>
        )
    }
}

export default Login