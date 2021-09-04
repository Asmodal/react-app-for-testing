import React from 'react';

const Input = ({ placeholder, label, type, ...other }) => (
    <label>{label}{' '}
        <input type={type} label={label} placeholder={placeholder} {...other} />
    </label>)

export default Input;