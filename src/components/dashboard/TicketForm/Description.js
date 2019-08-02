import React from 'react';

export default function Type(props) {
  if (props.currentStep !== 3) {
    // Prop: The current step
    return null;
  }
  return (
    <div className='form-group'>
      <input
        className='form-control'
        id='description'
        name='description'
        type='text'
        placeholder='Describe your issue'
        value={props.description} // Prop: The email input data
        onChange={props.handleChange} // Prop: Puts data into state
      />
    </div>
  );
}
