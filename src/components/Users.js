import React, { Component } from 'react'
import User from './User'

class Users extends Component {
    render() {
        return (
            <div>
                {this.props.users.map(
                    user => {
                        return (
                            <User key={user.id} user={user} />
                        )
                    }
                )}
            </div>
        )
    }
}

export default Users