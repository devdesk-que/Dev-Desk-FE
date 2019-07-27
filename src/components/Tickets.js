import React, { Component } from 'react';

export default class Tickets extends Component {
  render() {
    console.log('TICKETS PROPS:', this.props);
    console.log('TICKETS STATE:', this.state);
    return (
      <div>
        {this.props.tickets.map(ticket => {
          const { type, description, owner, assigned, id } = ticket;
          return (
            <div className='ticket' key={id}>
              <h1>{type}</h1>
              <h2>{description}</h2>
              <h3>{owner}</h3>
              <h4>{assigned}</h4>
            </div>
          );
        })}
      </div>
    );
  }
}
