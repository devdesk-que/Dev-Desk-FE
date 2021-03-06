import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getSingleTicket,
  editTicket,
  deleteTicket
} from '../../../store/actions';
import NavBar from '../Navigation/NavBar';
import { MdDeleteForever } from 'react-icons/md';
// import { placeholder } from '@babel/types';

class TicketPage extends Component {
<<<<<<< HEAD
  constructor() {
    super();
    this.state = {
      type: '',
      description: '',
      owner: '',
      assigned: '',
    };
  }
=======
  state = {
    type: '',
    description: '',
    owner: '',
    assigned: ''
  };
>>>>>>> 436f46ba923328b0e8e3827f7a12bb3e60cfb2f2
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getSingleTicket(id);
  }

  onChange = evt => {
    evt.preventDefault();
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

<<<<<<< HEAD
  updateTicket = async evt => {
    evt.preventDefault();
    const id = this.props.match.params.id
    const { type, description, owner, assigned } = this.state;

    this.props.editTicket({id, type, description, owner, assigned});
=======
  updateTicket = evt => {
    const id = this.props.match.params.id;
    evt.preventDefault();
    const { type, description, owner, assigned } = this.state;

    this.props.editTicket(id, { type, description, owner, assigned });
>>>>>>> 436f46ba923328b0e8e3827f7a12bb3e60cfb2f2

    this.setState({
      type: '',
      description: '',
      owner: '',
      assigned: ''
    });
  };
<<<<<<< HEAD

  deleteTicket = async evt => {
    const id = this.props.match.params.id;
    evt.preventDefault();
    this.props.deleteTicket(id).then(() => {
      this.props.history.push('/dashboard');
    });
  };
=======
>>>>>>> 436f46ba923328b0e8e3827f7a12bb3e60cfb2f2

  deleteTicket = async evt => {
    const id = this.props.match.params.id;
    console.log('ID:', id);
    evt.preventDefault();
    this.props.deleteTicket(id).then(() => {
      this.props.history.push('/dashboard');
    });
  };

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
        <div className='st-bg'>
          <div className='st-card'>
            <div className='top-content'>
              <h1>ID: {id}</h1>
              <h1>Type: {type}</h1>
            </div>
            <div className='bottom-content'>
              <h1>Description: {description}</h1>
              <h1>Owner: {owner}</h1>
              <h1>Assigned: {assigned}</h1>
            </div>
            <div>
              <form onSubmit={this.updateTicket}>
                Edit Ticket Here:
                <input
                  type='text'
                  name='type'
                  placeholder='Type'
                  value={this.state.type}
                  onChange={this.onChange}
                />
                <input
                  type='text'
                  name='description'
                  placeholder='Ticket Description'
                  value={this.state.description}
                  onChange={this.onChange}
                />
                <input
                  type='text'
                  name='owner'
                  placeholder='Owner'
                  value={this.state.owner}
                  onChange={this.onChange}
                />
                <input
                  type='text'
                  name='assigned'
                  placeholder='Assigned'
                  value={this.state.assigned}
                  onChange={this.onChange}
                />
                <button type='submit'>Submit Changes</button>
                <MdDeleteForever
                  className='delete'
                  onClick={this.deleteTicket}
                />
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state, atts) => {
  // const editTicket = atts.match.params.id ? state.ticket.filter( ticket => ticket.id.toString() === atts.match.params.id )[0] : ({
  //   type: '',
  //   description: '',
  //   owner: '',
  //   assigned: ''
  // })
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
