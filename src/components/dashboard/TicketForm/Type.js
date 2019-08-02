import React from 'react';

export default function Type(props) {
  if (props.currentStep !== 2) {
    // Prop: The current step
    return null;
  }
  return (
    <div className='form-group'>
      <input
        className='form-control'
        id='type'
        name='type'
        type='text'
        placeholder='What type of issue are you having?'
        value={props.type} // Prop: The email input data
        onChange={props.handleChange} // Prop: Puts data into state
      />
    </div>
  );
}
