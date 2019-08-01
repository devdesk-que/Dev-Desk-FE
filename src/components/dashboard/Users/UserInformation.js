import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleUser } from '../../../store/actions';

class UserInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id
    };
  }
  componentDidMount() {
    const id = this.props.id;
    this.props.getSingleUser(id);
  }

  render() {
    return (
      <div>
        <p>this is going to be a placeholder for now</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('THIS IS THE STATE BEING MAPPED:', state);
  return {
    loading: state.loading,
    error: state.error
    // user: state.user
    // id: state.user.id
  };
};
const mapDispatchToProps = {
  getSingleUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInformation);
