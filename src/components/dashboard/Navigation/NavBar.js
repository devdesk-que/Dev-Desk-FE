// React Components
import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { MdModeEdit, MdPerson } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';

// Components
import LogoAlt from '../../../assets/Logo-Alt';
import UserModal from '../Users/UserModal';
// import { throwStatement } from '@babel/types';

// function NavBar(props) {
//   const logout = e => {
//     e.preventDefault();

//     localStorage.removeItem('token');
//     props.history.push('/');
//   };
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  logout = e => {
    e.preventDefault();

    localStorage.removeItem('token');
    localStorage.removeItem('id');
    this.props.history.push('/');
  };

  showModal = evt => {
    evt.preventDefault()
    this.setState({
      show: !this.state.show
    });
  };

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

          <NavLink
            exact
            to='/users'
            onClick={evt => {
              evt.preventDefault();
              this.showModal(evt);
            }}
          >
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
    user: state.user
  };
};

export default withRouter(connect(mapStateToProps)(NavBar));
