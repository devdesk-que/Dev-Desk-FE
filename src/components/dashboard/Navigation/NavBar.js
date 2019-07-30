// React Components
import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { MdModeEdit, MdPerson } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';

// Components
import LogoAlt from '../../../assets/Logo-Alt';
import UserModal from '../Users/UserModal'

  class NavBar extends Component {
    constructor(props) {
      super(props)
      this.state = {
        show: false
      }
    }
    
    // Method allows logout of app, remove token from local storahe
    logout = e => {
      e.preventDefault()

      localStorage.removeItem('token')
      this.props.history.push('/')
    }

    // Changes the state of modal to allow it to open or close
    showModal = evt => {
      evt.preventDefault()
      this.setState({
        show: !this.state.show
      })
    }
  render() {
  return (
    <div className='navbar'>
      {/* Renders alternative logo and wraps a link back to dashboard on it */}
      <NavLink exact to='/dashboard'>
        <LogoAlt />
      </NavLink>

      {/* Container for the icons, links to /edit and /users */}
      <div className='icons-container'>
        <NavLink exact to='/edit'>
          <span role='img' aria-label='pencil' className='icons'>
            <MdModeEdit />
          </span>
        </NavLink>

        {/* Click handler allows method on modal to be called */}
        <NavLink exact to='/users' onClick={evt => {
          evt.preventDefault()
          this.showModal(evt)
        }}>
          <span role='img' aria-label='users' className='icons'>
            <MdPerson />
          </span>
        </NavLink>

        <NavLink exact to='/' onClick={this.logout}>
          <span role='img' aria-label='users' className='logout-icons icons'>
            <FiLogOut />
          </span>
        </NavLink>

        <UserModal onClose={this.showModal} show={this.state.show} />
      </div>

      {/* {this.state.user.map(wb => {
        return <h1 className='wb-user'>{wb.message}</h1>;
      })} */}
    </div>
  );
}
}

// From the Redux, we're using the state user.
const mapStateToProps = state => {
  console.log('NAVBAR STATE:', state);
  return {
    user: state.user,
  };
};

export default withRouter(connect(mapStateToProps)(NavBar));
