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
    state = {
        type: '',
        description: '',
        owner: '',
        assigned: ''

    }
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getSingleTicket(id);
  }
  onChange = evt => {
      evt.preventDefault()
      this.setState({
          [evt.target.name]: evt.target.value
        })
  }
  updateTicket = evt => {
    const id = this.props.match.params.id
      evt.preventDefault()
      const { type, description, owner, assigned } = this.state

      this.props.editTicket({ type, description, owner, assigned })

      this.setState({
          type: '',
          description: '',
          owner: '',
          assigned: ''
      })
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
                <button onClick={()=> {
                    this.props.deleteTicket(id)
                }}>Delete Ticket</button>
              </form>

        {/* //<div className='st-bg'>
         // <div className='st-card'>
          //  <div className='top-content'>
           //   <h1>{id}</h1>
            //  <h1>{type}</h1>
            //</div>
            //<div className='bottom-content'>
             // <h1>{description}</h1>
             // <h1>{owner}</h1>
             // <h1>{assigned}</h1>
            //</div> */}

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
    singleTicket: state.singleTicket,



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
