import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleTicket } from '../../../store/actions';
import NavBar from '../Navigation/NavBar';
// import { placeholder } from '@babel/types';

class TicketPage extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getSingleTicket(id);
  }

  render() {
    const { id } = this.props;
    console.log('The data is here, but can not be used?', id);
    return (
      <>
        <NavBar />
        <p>Well i know this will work</p>
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log('THIS IS THE STATE BEING MAPPED:', state);
  return {
    loading: state.loading,
    error: state.error,
    id: state.id
  };
};

const mapDispatchToProps = {
  getSingleTicket
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketPage);
