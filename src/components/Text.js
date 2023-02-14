import React from 'react';
import styles from './Text.module.css';

function Text(props) {
  const { text } = props;

  return (
    <p className={ styles.text }>{text}</p>
  );
}

export default Text;
