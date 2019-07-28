// React Components
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { MdModeEdit, MdPerson } from 'react-icons/md';

// Components
import LogoAlt from '../../../assets/Logo-Alt';

function NavBar() {
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

        <NavLink exact to='/users'>
          <span role='img' aria-label='users' className='icons'>
            <MdPerson />
          </span>
        </NavLink>
      </div>

      {/* {this.state.user.map(wb => {
        return <h1 className='wb-user'>{wb.message}</h1>;
      })} */}
    </div>
  );
}

// From the Redux, we're using the state user.
const mapStateToProps = state => {
  console.log('NAVBAR STATE:', state);
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(NavBar);
