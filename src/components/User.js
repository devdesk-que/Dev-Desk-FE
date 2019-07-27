import React from 'react'

const User = props => {
    const { id, username, authType } = props.user
    return (
        <div>
            <p>{id}</p>
            <p>{username}</p>
            <p>{authType}</p>
        </div>
    )
}

export default User