import React from 'react';

import './form-select.styles.scss';

const FormSelect = ({ handleChange, label, options, value, ...otherProps }) => (
  <div className='group'>
    <select className='form-input' onChange={handleChange} value={value} {...otherProps}>
      {value.id? <option key={value.id} value={value.id}>{value.name}</option> : <option value=''></option>}
        {
          options ? options.map(option => <option key={option.id} value={option.id}>{option.name}</option>) : ''
        }
    </select>
    {label ? (
      <label
        className={`${
          value ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormSelect;