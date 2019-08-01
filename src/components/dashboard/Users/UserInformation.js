import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleUser } from '../../../store/actions';


class UserInformation extends Component {

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.getSingleUser(id)
    }
    
    render() {
        const { id } = this.props
        console.log('The data is here, but can not be used?', id)
        return (
            <div>
                <p>Well i know this will work</p>
            </div>
        )
    }


const mapStateToProps = state => {
    console.log('THIS IS THE STATE BEING MAPPED:', state)
    return {
        loading: state.loading,
        error: state.error,
        id: state.id,
    }
}

const mapDispatchToProps = {
  getSingleUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInformation);
