import React, { Component } from 'react';
import { connect } from 'react-redux';

import SideBar from './dashboard/SideBar';
import { getTickets } from '../store/actions/';
import Tickets from './Tickets';

class App extends Component {
  componentDidMount() {
    this.props.getTickets();
  }

  render() {
    return (
      <>
        <SideBar />
        {this.props.loading ? (
          <p>Loading Tickets...</p>
        ) : (
          <Tickets tickets={this.props.tickets} />
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log('DASHBOARD STATE:', state);
  return {
    loading: state.devDeskReducer.loading,
    error: state.devDeskReducer.error,
    tickets: state.tickets
  };
};

const mapDispatchToProps = {
  getTickets
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
