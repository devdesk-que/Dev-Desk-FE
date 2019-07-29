// React Components
import React from 'react';

const Ticket = props => {
  // Destructuring type, description, owner, assigned, and id from props.ticket
  const { type, description, owner, assigned, id } = props.ticket;
  return (
    // Rendering ticket items
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
        <h1>Helper: {{ assigned } && 'Open'}</h1>
      </div>
    </div>
  );
};

export default Ticket;
