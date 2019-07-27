import React, { Component } from 'react'
import { getAllUsers } from '../store/actions/index'
import Users from './Users';
import { connect } from 'react-redux'

class UserModal extends Component {
    componentDidMount() {
        this.props.getAllUsers()
    }
    onClose = evt => {
        this.props.onClose && this.props.onClose(evt)
    }
    render() {
        if(!this.props.show){
            return null
        }
        return (
            
            <div>
                <h2>User List!</h2>
                
                <div>{this.props.children}</div>
                <Users users={this.props.users} />
                <div>
                    <button onClick={this.onClose}>
                        close
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        error: state.error,
        users: state.users
    }
}
const mapDispatchToProps = {
    getAllUsers
}
export default connect(mapStateToProps, mapDispatchToProps)(UserModal)