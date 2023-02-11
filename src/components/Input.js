import React from 'react';
import styles from './Input.module.css';

function Input({ placeholder, type = 'text', required = false, id = '' }) {
  return (
    <input
      type={ type }
      required={ required }
      placeholder={ placeholder }
      className={ styles.input }
      id={ id }
    />
  );
}

export default Input;
