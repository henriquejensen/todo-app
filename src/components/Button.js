import React from 'react';
import styles from './Button.module.css';

function Button(props) {
  const { children, type = 'button', onClick } = props;

  return (
    <button
      onClick={ onClick }
      className={ styles.button }
      type={ type }
    >
      {children}

    </button>
  );
}

export default Button;
