import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from './dashboard/NavBar';
import { getTickets } from '../store/actions/';
import Tickets from './Tickets';
import UserModal from './UserModal'
class App extends Component {
  state = {
    show: false
  }
  showModal = evt => {
    this.setState({
      show: !this.state.show
    })
  }
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

        <button className='dash-button' onClick={evt => {
          this.showModal(evt)
        }}>{''}View All Users{''}</button>
        <UserModal onClose={this.showModal} show={this.state.show} />
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
