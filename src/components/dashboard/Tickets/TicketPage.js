import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getSingleTicket,
  editTicket,
  deleteTicket
} from '../../../store/actions';
import NavBar from '../Navigation/NavBar';
// import { placeholder } from '@babel/types';

class TicketPage extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getSingleTicket(id);
    console.log('SINGLE TICKET PROPS', this.props);
  }

  render() {
    if (this.props.singleTicket === null) {
      return (
        <>
          <NavBar />
          <p>No ticket selected</p>
        </>
      );
    }

    const { id, type, description, owner, assigned } = this.props.singleTicket;
    return (
      <>
        <NavBar />
        <div className='st-card'>
          <div className='top-content'>
            <h1>{id}</h1>
            <h1>{type}</h1>
          </div>
          <div className='bottom-content'>
            <h1>{description}</h1>
            <h1>{owner}</h1>
            <h1>{assigned}</h1>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log('THIS IS THE STATE BEING MAPPED:', state);
  return {
    loading: state.loading,
    error: state.error,
    id: state.id,
    singleTicket: state.singleTicket
  };
};

const mapDispatchToProps = {
  getSingleTicket,
  editTicket,
  deleteTicket
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketPage);
