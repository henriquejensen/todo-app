import React from 'react';
import styles from './Subtitle.module.css';

function Subtitle({ subtitle }) {
  return (
    <h2 className={ styles.title }>{subtitle}</h2>
  );
}

export default Subtitle;
