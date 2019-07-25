import React from 'react';
import { NavLink } from 'react-router-dom';

import { MdHome, MdModeEdit, MdPerson } from 'react-icons/md';

export default function SideBar() {
  return (
    <div className='sidebar'>
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
    </div>
  );
}
