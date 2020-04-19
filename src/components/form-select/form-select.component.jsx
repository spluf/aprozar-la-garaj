import React from 'react';

import './form-select.styles.scss';

const FormSelect = ({ handleChange, label, ...otherProps }) => (
  <div className='group'>
    <select className='form-input' onChange={handleChange}>
        <option value=''>{label}</option>
    </select>
  </div>
);

export default FormSelect;