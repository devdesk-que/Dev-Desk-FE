import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import LogoAlt from '../../assets/Logo-Alt';
import { MdHome, MdModeEdit, MdPerson } from 'react-icons/md';

function NavBar() {
  return (
    <div className='navbar'>
      <LogoAlt />

      <NavLink exact to='/dashboard'>
        <span role='img' aria-label='house' className='icons'>
          <MdHome />
        </span>
      </NavLink>

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

      {/* {this.state.user.map(wb => {
        return <h1 className='wb-user'>{wb.message}</h1>;
      })} */}
    </div>
  );
}

const mapStateToProps = state => {
  console.log('NAVBAR STATE:', state);
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(NavBar);
