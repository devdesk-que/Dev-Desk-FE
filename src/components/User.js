import React from 'react'
import { Link } from 'react-router-dom'
// import UserInformation from './UserInformation'

const User = props => {
    const { id, username, authType } = props.user
    return (
        <div className='user'>
            {/* <p>ID: {id}</p> */}
            <Link to='/userinformation'>
                <p>Username: {username}</p>
            </Link>
            {/* <p>Type: {authType}</p> */}
        </div>
    )
}

export default User