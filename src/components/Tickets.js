import React, { Component } from 'react';
import Ticket from './Ticket';

export default class Tickets extends Component {
  render() {
    console.log('TICKETS PROPS:', this.props);
    console.log('TICKETS STATE:', this.state);
    return (
      <div className='tickets'>
        <h1 className='tickets-title'>All Tickets</h1>
        {this.props.tickets.map(ticket => {
          return <Ticket key={ticket.id} ticket={ticket} />;
        })}
      </div>
    );
  }
}
