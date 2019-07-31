// React Components
import React, { Component } from 'react';

// Components
import Ticket from './Ticket';

export default class Tickets extends Component {
  state = {
    currentPage: 1,
    ticketsPerPage: 5
  }
  pageSelector = evt => {
    this.setState({
      currentPage: Number(evt.target.id)
    })
  }

  render() {
    const { currentPage, ticketsPerPage } = this.state
    const tickets = this.props.tickets

    const indexOfLastTicket = currentPage * ticketsPerPage
    const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage
    const currentTickets = tickets.slice(indexOfFirstTicket, indexOfLastTicket)

    const displayTickets = currentTickets.map(ticket => {
      return <Ticket key={ticket.id} ticket={ticket} id={ticket.id} clickHandler={this.onClick} />
    })

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(tickets.length / ticketsPerPage); i++) {
      pageNumbers.push(i)
    }

    const displayPageNumbers = pageNumbers.map(number => {
      return (
        <div>
          <ol
            key={number}
            id={number}
            onClick={this.pageSelector}
            className='page-link'
          >
            {number}
          </ol>
        </div>
      )
    })
    return (
      // Maps and passes All Tickets to the Ticket Component
      <div className='tickets'>
        <h1 className='tickets-title'>All Tickets</h1>
        {displayTickets}
        {displayPageNumbers}
        {/* {this.props.tickets.map(ticket => {
          return <Ticket key={ticket.id} ticket={ticket} />;
        })} */}
      </div>
    );
  }
}
