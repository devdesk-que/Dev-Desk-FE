import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <>
        {this.props.loading ? (
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
    loading: state.devDeskReducer.loading,
    error: state.devDeskReducer.error
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);