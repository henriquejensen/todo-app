import React from 'react';
import styles from './Input.module.css';

function Input({ placeholder, type = 'text', required = false }) {
  return (
    <input
      type={ type }
      required={ required }
      placeholder={ placeholder }
      className={ styles.input }
    />
  );
}

export default Input;
