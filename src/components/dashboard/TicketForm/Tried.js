import React from 'react';

export default function Type(props) {
  if (props.currentStep !== 4) {
    // Prop: The current step
    return null;
  }
  return (
    <div className='form-group'>
      <input
        className='form-control'
        id='tried'
        name='tried'
        type='text'
        placeholder='What have you tried?'
        value={props.tried} // Prop: The email input data
        onChange={props.handleChange} // Prop: Puts data into state
      />
    </div>
  );
}
