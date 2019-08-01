import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSingleUser } from '../../../store/actions'
// import MyUser from './MyUser'
// import { CLIENT_RENEG_LIMIT } from 'tls';


class UserInformation extends Component {
    // state = {
    //     user: undefined
    // }
    componentDidMount() {
        const id = this.props.match.params.id
        this.props.getSingleUser(id)
    }
    // componentDidUpdate() {
    //     if (this.state.user === undefined) {
    //         this.setState({
    //             user: this.props.id
    //         })
    //     }
    // }
    //     const user = this.props.id
    //     console.log('jfwev erlivb er:', user)        
    // }
    render() {
        console.log(this.props.id)
        // const id = this.props.match.params.id
        // console.log('hjebvuewhjb v:', id)
        // const currentUser = this.props.singUser
        // console.log('jwneiewivjkew:', currentUser)
        return (
            <div>
                <p>Well i know this will work</p>
                {this.props.user}
                {/* <MyUser id={this.props.id} getUser={getSingleUser} /> */}
            </div>
        )
    }
}
//     // state = {
//     //     user: this.props.id
//     // }
//     componentDidMount(){
//         const id = this.props.match.params.id
//         // console.log('props:', this.props)
//         // const id = this.props.match.params.id
//         this.props.getSingleUser(id)
//         // console.log('ID in CDM:', id)
//         // console.log('Params?', this.props.match.params.id )
//         // console.log('WEEE HAVE ID:', id)
//         // console.log(this.props.payload)
//     }
//     // componentDidMount() {
//     //     const newId = this.props.id
//     //     console.log(newId)
//     // }
//     // console.log(this.state.user)
//     // componentDidUpdate() {
//     //     // this.setState({
//     //     //     user: this.props.id
//     //     // })
//     //     // const user = this.props.id
//     //     // console.log(Array.from(user))
//     //     // console.log(user)
//     //     // const userArray = Object.entries(user)
//     //     // console.log('hope this works:', userArray)
//     //     // console.log('My id, in CDU:', user)
//     //     // const userArray = Object.keys(id).id((key) => id[key])
//     //     // console.log(userArray)
//     // }
//     // componentDidUpdate() {
//     //     const user: this.props.id
//     //     console.log(user)
//     // }

//     render() {
//         // return (
//         //     <div>
//         //         <p>`why is this so difficult? ${this.props.id}`</p>
//         //         <MyUser currentUser={this.props.id} />
//         //     </div>
//         // )
//         // console.log('yppppp:', this.props.id)

//         // const matt = {
//         //     age: 21,
//         //     birthday: 'june'
//         // }
//         // console.log(matt)
//         // console.log(matt.age)
//         // console.log('wellllllllll:', this.state.user)
//         // const user = this.props.id
//         // const currentUser = user
//         // console.log('CURRENT_USER:', currentUser)
//         // const currentNewUser = Array.from(currentUser)
//         // console.log(currentNewUser)
//         // console.log(this.state.user)
//         // const id = this.props.id
//         // console.log('ID in render', this.props.id)
//         // console.log(user.username)
//         // const newId = setTimeout(Object.keys(id).id((key) => id[key]), 4000)
//         // setTimeout(console.log(newId), 6000)
//         // const userArray = Object.keys(this.props.id).map(function (i) {
//         //     return this.props.id[i]
//         // })
//         // // console.log(userArray)
//         // const idArray = id.map(item => {
//         //     return <MyUser item={item} />
//         // })
//         // console.log('ID in render, after CDU', this.props.id)
//         // const matt = {
//         //     age: 21, birthday: 'june'
//         // }
//         // console.log(matt)
//         // const user = this.props.id
//         // console.log(this.props.id)

//         // return (
//         //     // console.log(user.username)
//         //     <div>
//         //         {/* {this.props.id} */}
//         //         <p>this is going to be a placeholder for now</p>
//         //         {/* {idArray} */}
//         //     </div>
//         // )
//     }
// }

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
)(UserInformation)