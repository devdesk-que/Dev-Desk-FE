// React Components
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Store
import { getSingleUser } from '../../../store/actions'

// Components
class UserInformation extends Component {
    
    // Calls getSingleUser from Redux
    componentDidMount() {
        this.props.getSingleUser(this.props.id)
    }

    render() {
        return (
            <div>
                <p>this is going to be a placeholder for now</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('UserInformation', state)
    return {
        loading: state.loading,
        error: state.error,
        id: state.id
    }
}
const mapDispatchToProps = {
    getSingleUser
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserInformation)