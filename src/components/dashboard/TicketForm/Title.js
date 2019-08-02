import React from 'react';

export default function Type(props) {
  if (props.currentStep !== 1) {
    // Prop: The current step
    return null;
  }
  return (
    <div className='form-group'>
      <input
        className='form-control'
        id='title'
        name='title'
        type='text'
        placeholder='What is your issue?'
        value={props.title} // Prop: The email input data
        onChange={props.handleChange} // Prop: Puts data into state
      />
    </div>
  );
}
