import React, { Component } from 'react';

import Title from './Title';
import Description from './Description';
import Type from './Type';
import Tried from './Tried';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

export default class MasterForm extends Component {
  constructor(props) {
    super(props);
    // Set the initial input values
    this.state = {
      currentStep: 1, // Default is Step 1
      type: '',
      description: '',
      title: '',
      tried: ''
    };
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }

  _next() {
    let currentStep = this.state.currentStep;

    currentStep = currentStep >= 3 ? 4 : currentStep + 1;
    this.setState({ currentStep: currentStep });
  }

  _prev() {
    let currentStep = this.state.currentStep;

    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({ currentStep: currentStep });
  }

  get getPrev() {
    let currentStep = this.state.currentStep;

    if (currentStep !== 1) {
      return (
        <button className='form-btn' type='button' onClick={this._prev}>
          <MdKeyboardArrowLeft />
        </button>
      );
    }
    return null;
  }

  get getNext() {
    let currentStep = this.state.currentStep;

    if (currentStep < 4) {
      return (
        <button className='form-btn' type='button' onClick={this._next}>
          <MdKeyboardArrowRight />
        </button>
      );
    }
    return null;
  }

  handleChange = evt => {
    evt.preventDefault();

    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  // Trigger an alert on form submission
  handleSubmit = evt => {
    evt.preventDefault();

    const { type, description, title, tried } = this.state;
    alert(`Your registration detail: \n 
        type: ${type} \n 
        description: ${description} \n
        title: ${title} \n
        tried: ${tried}`);
  };

  render() {
    return (
      <>
        <h1 className='submit-title'>Submit A Ticket</h1>

        <div className='step-n-forms'>
          <div className='btn-container'>
            {this.getPrev}
            {this.getNext}
          </div>

          <form onSubmit={this.handleSubmit}>
            <Title
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              title={this.state.title}
            />
            <Type
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              title={this.state.title}
            />
            <Description
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              title={this.state.title}
            />
            <Tried
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              title={this.state.title}
            />
          </form>
        </div>
      </>
    );
  }
}
