import React from 'react';
import styles from './Input.module.css';

function Input({
  placeholder, type = 'text', required = false, id = '',
  value, onChange, name = '',
}) {
  return (
    <input
      type={ type }
      required={ required }
      placeholder={ placeholder }
      className={ styles.input }
      id={ id }
      value={ value }
      onChange={ onChange }
      name={ name }
    />
  );
}

export default Input;
