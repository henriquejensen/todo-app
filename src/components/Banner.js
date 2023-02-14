import React from 'react';
import styles from './Banner.module.css';

function Banner(props) {
  const { image, alt } = props;

  return (
    <img src={ image } alt={ alt } className={ styles.image } />
  );
}

export default Banner;
