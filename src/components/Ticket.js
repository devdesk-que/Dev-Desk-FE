import React from 'react';

const Ticket = props => {
  const { type, description, owner, assigned, id } = props.ticket;
  return (
    <div className='ticket' key={id}>
      <div className='ticket-item'>
        <h1>{type}</h1>
      </div>

      <div className='ticket-item'>
        <h1>{description}</h1>
      </div>

      <div className='ticket-item'>
        <h1>{owner}</h1>
      </div>

      <div className='ticket-item'>
        <h1>{assigned}</h1>
      </div>
    </div>
  );
};

export default Ticket;
