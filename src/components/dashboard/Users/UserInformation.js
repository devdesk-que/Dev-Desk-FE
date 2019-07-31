import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSingleUser } from '../../../store/actions'


class UserInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id
        }
    }
    componentDidMount() {
        this.props.getSingleUser(this.state.id)
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