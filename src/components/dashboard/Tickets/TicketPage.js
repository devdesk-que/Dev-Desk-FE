import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSingleTicket } from '../../../store/actions'
// import { placeholder } from '@babel/types';

class TicketPage extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         id: this.props.id
    //     }
    // }
    componentDidMount() {
        const id = this.props.match.params.id
        this.props.getSingleTicket(id)
    }
    render() {
        console.log(this.props.ticket)
        return (
            <div>
                <p>placeholder, lets see if this works</p>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        loading: state.loading,
        error: state.error,
        // id: state.tickets.id,
        // ticket: state.tickets.ticket
        // ticket: state.ticket
    }
}
const mapDispatchToProps = {
    getSingleTicket
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TicketPage)