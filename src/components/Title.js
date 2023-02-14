import React from 'react';
import styles from './Title.module.css';

function Title(props) {
  const { title } = props;

  return (
    <h1 className={ styles.title }>{title}</h1>
  );
}

export default Title;
