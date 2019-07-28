// React Components
import React, { Component } from 'react';

// Components
import Ticket from './Ticket';

export default class Tickets extends Component {
  render() {
    return (
      // Maps and passes All Tickets to the Ticket Component
      <div className='tickets'>
        <h1 className='tickets-title'>All Tickets</h1>
        {this.props.tickets.map(ticket => {
          return <Ticket key={ticket.id} ticket={ticket} />;
        })}
      </div>
    );
  }
}
