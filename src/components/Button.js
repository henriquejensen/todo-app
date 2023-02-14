import React from 'react';
import styles from './Button.module.css';

function Button(props) {
  const {
    children, type = 'button', onClick, disabled = false,
  } = props;

  return (
    <button
      onClick={ onClick }
      className={ styles.button }
      type={ type }
      disabled={ disabled }
    >
      {children}

    </button>
  );
}

export default Button;
