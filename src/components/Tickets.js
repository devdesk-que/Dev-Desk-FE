import React, { Component } from 'react';

export default class Tickets extends Component {
  render() {
    console.log('TICKETS PROPS:', this.props);
    console.log('TICKETS STATE:', this.state);
    return (
      <div className='tickets'>
        {this.props.tickets.map(ticket => {
          const { type, description, owner, assigned, id } = ticket;
          return (
            <div className='ticket' key={id}>
              <h1>{type}</h1>
              <h1>{description}</h1>
              <h1>{owner}</h1>
              <h1>{assigned}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}
