import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <>
        {this.props.fetching ? (
          <p>Loading Tickets...</p>
        ) : (
          <h1>Ticket Component goes here</h1>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log('DASHBOARD STATE:', state);
  return {
    fetching: state.fetching,
    error: state.error,
    tickets: state.tickets
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
