import React, { Component } from 'react';

export default class Tickets extends Component {
  render() {
    console.log('TICKETS PROPS:', this.props);
    console.log('TICKETS STATE:', this.state);
    return (
      <div>
        <h1>Hello from Tickets Component</h1>
      </div>
    );
  }
}
