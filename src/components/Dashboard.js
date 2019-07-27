import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from './dashboard/NavBar';
import { getTickets } from '../store/actions/';
import Tickets from './Tickets';

class App extends Component {
  componentDidMount() {
    this.props.getTickets();
  }

  render() {
    return (
      <>
        <NavBar />
        <div className='dashboard'>
          {this.props.loading ? (
            <p>Loading Tickets...</p>
          ) : (
            <Tickets tickets={this.props.tickets} />
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log('DASHBOARD STATE:', state);
  return {
    loading: state.loading,
    error: state.error,
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
